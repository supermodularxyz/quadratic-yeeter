import { Signer } from '@ethersproject/abstract-signer'
import { MatchingStatsData, Round } from './types'
import { fetchFromIPFS, payoutTokens } from './utils'
import { BigNumber, ethers, utils } from 'ethers'
import { Web3Provider } from '@ethersproject/providers'
import deployEvents, { delay, formatAddress } from './deployEvents'
import {
  merklePayoutStrategyImplementationContract,
  roundFactoryContract,
  roundImplementationContract,
} from './contracts'
import { DEPLOYSTATUS } from '@/types/yeeter'

/**
 * Deploys a round by invoking the create funciton on RoundFactory
 *
 * @param round
 * @param signerOrProvider
 * @returns
 */
export async function deployRoundContract(
  round: Round,
  signerOrProvider: Signer
): Promise<{ transactionBlockNumber: number }> {
  try {
    const chainId = await signerOrProvider.getChainId()

    deployEvents({ Round: { status: DEPLOYSTATUS.WAITING, message: `Initializing round contract deployment` } })

    const _roundFactoryContract = roundFactoryContract(chainId)
    const roundFactory = new ethers.Contract(
      _roundFactoryContract.address!,
      _roundFactoryContract.abi,
      signerOrProvider
    )

    if (!round.applicationsEndTime) {
      round.applicationsEndTime = round.roundStartTime
    }

    round.operatorWallets = round.operatorWallets?.filter((e) => e !== '')

    const initAddresses = [round.votingStrategy, round.payoutStrategy.id]

    const initRoundTimes = [
      new Date(round.applicationsStartTime).getTime() / 1000,
      new Date(round.applicationsEndTime).getTime() / 1000,
      new Date(round.roundStartTime).getTime() / 1000,
      new Date(round.roundEndTime).getTime() / 1000,
    ].map((i) => Math.trunc(i))

    const initMetaPtr = [round.store, round.applicationStore]

    const initRoles = [[await signerOrProvider.getAddress()], round.operatorWallets]

    // Ensure tokenAmount is normalized to token decimals
    const tokenAmount = round.roundMetadata.quadraticFundingConfig?.matchingFundsAvailable || 0
    const token = payoutTokens.filter((t) => t.address.toLocaleLowerCase() == round.token.toLocaleLowerCase())[0]
    const parsedTokenAmount = utils.parseUnits(tokenAmount.toString(), token.decimal)

    // encode input parameters
    const params = [
      initAddresses,
      initRoundTimes,
      parsedTokenAmount,
      round.token,
      round.feesPercentage || 0,
      round.feesAddress || ethers.constants.AddressZero,
      initMetaPtr,
      initRoles,
    ]

    console.log({ token, parsedTokenAmount, tokenAmount, params })

    const encodedParameters = ethers.utils.defaultAbiCoder.encode(
      [
        'tuple(address votingStrategy, address payoutStrategy)',
        'tuple(uint256 applicationsStartTime, uint256 applicationsEndTime, uint256 roundStartTime, uint256 roundEndTime)',
        'uint256',
        'address',
        'uint8',
        'address',
        'tuple(tuple(uint256 protocol, string pointer), tuple(uint256 protocol, string pointer))',
        'tuple(address[] adminRoles, address[] roundOperators)',
      ],
      params
    )

    deployEvents({ Round: { status: DEPLOYSTATUS.TX, message: `Deploying round contract` } })

    // Deploy a new Round contract
    const tx = await roundFactory.create(encodedParameters, round.ownedBy)

    const receipt = await tx.wait() // wait for transaction receipt

    let roundAddress

    if (receipt.events) {
      const event = receipt.events.find((e: { event: string }) => e.event === 'RoundCreated')
      if (event && event.args) {
        roundAddress = event.args.roundAddress
      }
    }

    console.log('✅ Round Contract Transaction hash: ', tx.hash)
    console.log('✅ Round address: ', roundAddress)

    deployEvents({
      Round: {
        status: DEPLOYSTATUS.COMPLETED,
        message: `Round deployed at ${formatAddress(roundAddress)}`,
        data: { roundAddress },
      },
    })

    await delay(1000)

    const blockNumber = receipt.blockNumber
    return {
      transactionBlockNumber: blockNumber,
    }
  } catch (error) {
    console.error('deployRoundContract', error)

    deployEvents({
      Round: { status: DEPLOYSTATUS.FAILED, message: `Round deployment failed` },
    })

    await delay(1000)

    throw new Error('Unable to create round')
  }
}

/**
 * Fetch finalized matching distribution
 * @param roundId - the ID of a specific round for detail
 * @param signerOrProvider
 */
export async function fetchMatchingDistribution(
  roundId: string | undefined,
  signerOrProvider: Web3Provider
): Promise<{
  distributionMetaPtr: string
  matchingDistribution: MatchingStatsData[]
}> {
  try {
    if (!roundId) {
      throw new Error('Round ID is required')
    }
    let matchingDistribution: MatchingStatsData[] = []
    const roundImplementation = new ethers.Contract(roundId, roundImplementationContract.abi, signerOrProvider)
    const payoutStrategyAddress = await roundImplementation.payoutStrategy()
    const payoutStrategy = new ethers.Contract(
      payoutStrategyAddress,
      merklePayoutStrategyImplementationContract.abi,
      signerOrProvider
    )
    const distributionMetaPtrRes = await payoutStrategy.distributionMetaPtr()
    const distributionMetaPtr = distributionMetaPtrRes.pointer

    if (distributionMetaPtr !== '') {
      // fetch distribution from IPFS
      const matchingDistributionRes = await fetchFromIPFS(distributionMetaPtr)
      matchingDistribution = matchingDistributionRes.matchingDistribution

      // parse matchAmountInToken to a valid BigNumber
      matchingDistribution.map((distribution) => {
        distribution.matchAmountInToken = BigNumber.from(
          // eslint-disable-next-line
          (distribution.matchAmountInToken as any).hex
        )
      })
    }

    return { distributionMetaPtr, matchingDistribution }
  } catch (error) {
    console.error('fetchMatchingDistribution', error)
    throw new Error('Unable to fetch matching distribution')
  }
}
