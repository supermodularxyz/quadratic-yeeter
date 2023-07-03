import { ethers } from 'ethers'
import { Signer } from '@ethersproject/abstract-signer'
import { ProgressStatus, ProjectRequirements, Round, StorageProtocolID, MetadataPointer, Web3Instance } from './types'
import { programFactoryContract } from './contracts'
import { SchemaQuestion } from './utils'
import { saveToIPFS } from './ipfs'
import { deployQFVotingContract } from './votingStrategy/qfVotingStrategy'
import { deployMerklePayoutStrategyContract } from './payoutStrategy/merklePayoutStrategy'
import { deployRoundContract } from './round'
import { waitForSubgraphSyncTo } from './subgraph'
import deployEvents, { delay, formatAddress } from './deployEvents'
import { DEPLOYSTATUS } from '@/types/yeeter'

interface DeployProgramContractProps {
  program: {
    store: MetadataPointer
    operatorWallets: string[]
  }
  signerOrProvider: Signer
}

export interface CreateRoundState {
  IPFSCurrentStatus: ProgressStatus
  votingContractDeploymentStatus: ProgressStatus
  payoutContractDeploymentStatus: ProgressStatus
  roundContractDeploymentStatus: ProgressStatus
  indexingStatus: ProgressStatus
}

export type CreateRoundData = {
  roundMetadataWithProgramContractAddress: Round['roundMetadata']
  applicationQuestions: {
    version: string
    lastUpdatedOn: number
    applicationSchema: {
      questions: SchemaQuestion[]
      requirements: ProjectRequirements
    }
  }
  round: Round
}

interface _createRoundParams {
  signerOrProvider: Signer
  createRoundData: CreateRoundData
}

interface _createProgramParams {
  programName: string
  operatorWallets: string[]
  signerOrProvider: Web3Instance['provider']
}

export const _createProgram = async ({
  programName,
  operatorWallets,
  signerOrProvider,
}: _createProgramParams): Promise<string> => {
  try {
    const IpfsHash = await storeDocument(programName)

    const metadata = {
      protocol: 1,
      pointer: IpfsHash,
    }

    deployEvents({ Program: { status: DEPLOYSTATUS.WAITING, message: 'Deploying new program contract' } })
    const { transactionBlockNumber, programAddress } = await deployContract(metadata, operatorWallets, signerOrProvider)

    console.log({ programAddress })

    deployEvents({
      Program: { status: DEPLOYSTATUS.TX, message: `Deployed new program contract, awaiting subgraph indexing` },
    })

    await waitForSubgraphToUpdate(
      // @ts-expect-error TODO: resolve this situation around signers and providers
      signerOrProvider,
      transactionBlockNumber
    )

    deployEvents({
      Program: { status: DEPLOYSTATUS.COMPLETED, message: `New program deployed to ${formatAddress(programAddress)}` },
    })

    await delay(1000)

    return programAddress
  } catch (error) {
    console.log(`error: _createProgram - ${error}`)
    console.error('_createProgram: ', error)

    deployEvents({ Program: { status: DEPLOYSTATUS.FAILED, message: `Program deployment failed` } })

    throw error
  }
}

async function deployContract(
  metadata: { protocol: number; pointer: string },
  operatorWallets: string[],
  signerOrProvider: Web3Instance['provider']
) {
  try {
    const { transactionBlockNumber, programAddress } = await deployProgramContract({
      program: { store: metadata, operatorWallets },
      // @ts-expect-error TODO: resolve this situation around signers and providers
      signerOrProvider: signerOrProvider,
    })

    return { transactionBlockNumber, programAddress }
  } catch (error) {
    console.log(`error: deployContract - ${error}`)
    console.error(`deployContract`, error)

    throw error
  }
}

async function storeDocument(programName: string) {
  console.log(`storeDocument: programName - ${programName}`)
  deployEvents({ Program: { status: DEPLOYSTATUS.WAITING, message: 'Storing program data in IPFS' } })

  try {
    const IpfsHash: string = await saveToIPFS({
      content: { name: programName },
      metadata: {
        name: 'program-metadata',
      },
    })

    return IpfsHash
  } catch (error) {
    console.error(`storeDocument`, error)
    console.log(`error: storeDocument - ${error}`)
    deployEvents({ Program: { status: DEPLOYSTATUS.FAILED, message: 'Program data storage failed' } })

    await delay(1000)

    throw error
  }
}

export async function deployProgramContract({
  program: { store: metadata, operatorWallets },
  signerOrProvider,
}: DeployProgramContractProps): Promise<{ transactionBlockNumber: number; programAddress: string }> {
  try {
    const chainId = await signerOrProvider.getChainId()
    const _programFactoryContract = programFactoryContract(chainId)
    const programFactory = new ethers.Contract(
      _programFactoryContract.address!,
      _programFactoryContract.abi,
      signerOrProvider
    )

    operatorWallets = operatorWallets.filter((e) => e !== '')

    const encodedParameters = encodeInputParameters(metadata, operatorWallets)

    // Deploy a new Program contract
    const tx = await programFactory.create(encodedParameters)
    const receipt = await tx.wait()
    let programAddress

    if (receipt.events) {
      const event = receipt.events.find((e: { event: string }) => e.event === 'ProgramCreated')
      if (event && event.args) {
        programAddress = event.args.programContractAddress // program contract address from the event
      }
    }

    console.log('✅ Transaction hash: ', tx.hash)
    console.log('✅ Program address: ', programAddress)
    const blockNumber = receipt.blockNumber
    return {
      transactionBlockNumber: blockNumber,
      programAddress,
    }
  } catch (error) {
    console.error('deployProgramContract', error)
    throw new Error('Unable to create program')
  }
}

function encodeInputParameters(metadata: MetadataPointer, operatorWallets: string[]) {
  return ethers.utils.defaultAbiCoder.encode(
    ['tuple(uint256 protocol, string pointer)', 'address[]', 'address[]'],
    [metadata, operatorWallets.slice(0, 1), operatorWallets]
  )
}

async function storeDocuments(
  roundMetadataWithProgramContractAddress: CreateRoundData['roundMetadataWithProgramContractAddress'],
  applicationQuestions: CreateRoundData['applicationQuestions']
) {
  try {
    deployEvents({ Preparation: { status: DEPLOYSTATUS.WAITING, message: `Saving round config to IPFS` } })

    const [roundMetadataIpfsHash, applicationSchemaIpfsHash] = await Promise.all([
      saveToIPFS({
        content: roundMetadataWithProgramContractAddress,
        metadata: {
          name: 'round-metadata',
        },
      }),
      saveToIPFS({
        content: applicationQuestions,
        metadata: {
          name: 'application-schema',
        },
      }),
    ])

    deployEvents({ Preparation: { status: DEPLOYSTATUS.COMPLETED, message: `Saved round config successfully` } })

    await delay(1000)

    return {
      roundMetadataIpfsHash,
      applicationSchemaIpfsHash,
    }
  } catch (error) {
    console.error('storeDocuments', error)

    console.log(ProgressStatus.IS_ERROR)

    deployEvents({ Preparation: { status: DEPLOYSTATUS.FAILED, message: `Saving round config to IPFS failed` } })

    await delay(1000)

    throw error
  }
}

async function handleDeployVotingContract(signerOrProvider: Signer): Promise<string> {
  try {
    console.log(ProgressStatus.IN_PROGRESS)
    deployEvents({ Voting: { status: DEPLOYSTATUS.WAITING, message: `Initialize deployment of voting contract` } })
    const { votingContractAddress } = await deployQFVotingContract(signerOrProvider)

    console.log(ProgressStatus.IS_SUCCESS)

    deployEvents({
      Voting: {
        status: DEPLOYSTATUS.COMPLETED,
        message: `Voting contract deployed at ${formatAddress(votingContractAddress)}`,
      },
    })

    await delay(1000)

    return votingContractAddress
  } catch (error) {
    console.log(ProgressStatus.IS_ERROR)
    deployEvents({ Voting: { status: DEPLOYSTATUS.FAILED, message: `Voting contract deployment failed` } })

    await delay(1000)

    throw error
  }
}

async function handleDeployPayoutContract(signerOrProvider: Signer): Promise<string> {
  try {
    console.log(ProgressStatus.IN_PROGRESS)
    deployEvents({ Payout: { status: DEPLOYSTATUS.WAITING, message: `Initialize deployment of payout contract` } })
    const { payoutContractAddress } = await deployMerklePayoutStrategyContract(signerOrProvider)

    console.log(ProgressStatus.IS_SUCCESS)

    deployEvents({
      Payout: {
        status: DEPLOYSTATUS.COMPLETED,
        message: `Payout contract deployed at ${formatAddress(payoutContractAddress)}`,
      },
    })

    await delay(1000)

    return payoutContractAddress
  } catch (error) {
    console.error('handleDeployPayoutContract', error)
    console.log(ProgressStatus.IS_ERROR)
    deployEvents({ Payout: { status: DEPLOYSTATUS.FAILED, message: `Payout contract deployment failed` } })

    await delay(1000)

    throw error
  }
}

async function handleDeployRoundContract(round: Round, signerOrProvider: Signer): Promise<number> {
  try {
    console.log(ProgressStatus.IN_PROGRESS)

    const { transactionBlockNumber } = await deployRoundContract(round, signerOrProvider)

    console.log(ProgressStatus.IS_SUCCESS)

    return transactionBlockNumber
  } catch (error) {
    console.error('handleDeployRoundContract', error)
    console.log(ProgressStatus.IS_ERROR)
    deployEvents({ Round: { status: DEPLOYSTATUS.FAILED, message: `Round deployment failed` } })

    await delay(1000)

    throw error
  }
}

async function waitForSubgraphToUpdate(signerOrProvider: Signer, transactionBlockNumber: number) {
  try {
    console.log(ProgressStatus.IN_PROGRESS)

    const chainId = await signerOrProvider.getChainId()
    await waitForSubgraphSyncTo(chainId, transactionBlockNumber)

    console.log(ProgressStatus.IS_SUCCESS)
  } catch (error) {
    console.error('waitForSubgraphToUpdate', error)
    console.log(ProgressStatus.IS_ERROR)
    throw error
  }
}

export const createRound = async ({ signerOrProvider, createRoundData }: _createRoundParams) => {
  const { roundMetadataWithProgramContractAddress, applicationQuestions, round } = createRoundData
  try {
    const { roundMetadataIpfsHash, applicationSchemaIpfsHash } = await storeDocuments(
      roundMetadataWithProgramContractAddress,
      applicationQuestions
    )

    const roundContractInputsWithPointers = {
      ...round,
      store: {
        protocol: StorageProtocolID.IPFS,
        pointer: roundMetadataIpfsHash,
      },
      applicationStore: {
        protocol: StorageProtocolID.IPFS,
        pointer: applicationSchemaIpfsHash,
      },
    }

    const votingContractAddress = await handleDeployVotingContract(signerOrProvider)

    const payoutContractAddress = await handleDeployPayoutContract(signerOrProvider)

    deployEvents({ Round: { status: DEPLOYSTATUS.WAITING, message: `Starting round deployment` } })

    const roundContractInputsWithContracts = {
      ...roundContractInputsWithPointers,
      votingStrategy: votingContractAddress,
      payoutStrategy: {
        id: payoutContractAddress,
        isReadyForPayout: false,
      },
    }

    const transactionBlockNumber = await handleDeployRoundContract(roundContractInputsWithContracts, signerOrProvider)

    await waitForSubgraphToUpdate(signerOrProvider, transactionBlockNumber)
  } catch (error) {
    console.error('_createRound', error)

    throw error
  }
}

export const initialRequirements: ProjectRequirements = {
  twitter: {
    required: false,
    verification: false,
  },
  github: {
    required: false,
    verification: false,
  },
}

export const initialQuestions: SchemaQuestion[] = [
  {
    id: 0,
    title: 'Payout Wallet Address',
    required: true,
    encrypted: false,
    hidden: true,
    type: 'address',
  },
  {
    id: 1,
    title: 'Email Address',
    required: true,
    encrypted: true,
    hidden: true,
    type: 'email',
  },
  {
    id: 2,
    title: 'Funding Sources',
    required: true,
    encrypted: false,
    hidden: false,
    type: 'short-answer',
  },
  {
    id: 3,
    title: 'Team Size',
    required: true,
    encrypted: false,
    hidden: false,
    type: 'number',
  },
]

interface DeployQFRoundParams {
  programName: string
  programAddress?: string
  operatorWallets: string[]
  signer: Signer
  _round: any
}

export const deployQFRound = async ({
  programName,
  programAddress,
  operatorWallets,
  _round,
  signer,
}: DeployQFRoundParams) => {
  try {
    if (programAddress) {
      deployEvents({
        Program: { status: DEPLOYSTATUS.COMPLETED, message: `Using existing program ${formatAddress(programAddress)}` },
      })

      await delay(1000)
    }

    // deploy program
    programAddress =
      programAddress ||
      (await _createProgram({
        programName,
        operatorWallets,
        // @ts-expect-error
        signerOrProvider: signer,
      }))

    // form data
    const round: Round = {
      ..._round,
      roundMetadata: {
        ..._round?.roundMetadata,
        programContractAddress: programAddress,
      },
      ownedBy: programAddress,
    }

    deployEvents({ Preparation: { status: DEPLOYSTATUS.WAITING, message: `Preparing round data` } })

    // deploy round
    createRound({
      signerOrProvider: signer,
      createRoundData: {
        roundMetadataWithProgramContractAddress: round.roundMetadata,
        applicationQuestions: {
          lastUpdatedOn: Date.now(),
          applicationSchema: {
            questions: initialQuestions,
            requirements: initialRequirements,
          },
          version: '2.0.0',
        },
        round,
      },
    })
  } catch (error) {
    console.log(`Deployments failed somewhere`)
  }
}
