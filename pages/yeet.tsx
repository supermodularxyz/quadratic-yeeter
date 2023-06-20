import { useState, useEffect } from 'react'
import { Inter } from 'next/font/google'
import { ethers, Signer } from 'ethers'
import { useAccount, useSigner, useProvider } from 'wagmi';
import { deployQFRound } from '@/utils/deployer'
import { BurnerWallet, FormSchemaWithConfig } from '@/types/yeeter';
import { Completed, Edit, Preview, Progress } from '@/views';
const inter = Inter({ subsets: ['latin'] })

const defaultBurnerWallet = {
  keys: "",
  address: "" as `0x${string}`
}

const views = [Edit, Preview, Progress, Completed]


export default function Home() {
  const [formData, setFormData] = useState<FormSchemaWithConfig>()
  const [burnerWallet, setBurnerWallet] = useState<BurnerWallet>(defaultBurnerWallet)
  const [viewIndex, setViewIndex] = useState<number>(0)
  const { address } = useAccount()
  const { data: signer } = useSigner()
  const provider = useProvider()

  const setupBurnerWallet = () => {
    // look for wallet in localStorage
    let _burner = JSON.parse(localStorage.getItem('burner') || "{}")

    // create one if none exists and add to localStorage
    if (!_burner.keys) {
      const wallet = ethers.Wallet.createRandom()
      _burner = { keys: wallet.privateKey, address: wallet.address }
      localStorage.setItem("burner", JSON.stringify(_burner))
    }

    // set the key and address
    setBurnerWallet(_burner)
  }

  useEffect(() => {
    setupBurnerWallet()
  }, [])

  const toggleNextView = (valuesWithConfig?: FormSchemaWithConfig, roundId?: string) => {
    if (valuesWithConfig) {
      setFormData(valuesWithConfig)
    }

    if (roundId) {
      console.log(`Round Address Received`, roundId)
      const update = Object.assign({}, formData)
      update.config.roundId = roundId;

      setFormData(update)
    }

    const nextView = viewIndex + 1

    setViewIndex(nextView)

    if (nextView === 2) {
      handleYeet()
    }
  }

  const handleYeet = async () => {
    if (formData) {
      // setup signer here
      let deployerSigner = signer

      if (formData.config.useBurner && formData.program === "" && burnerWallet) {
        deployerSigner = new ethers.Wallet(burnerWallet.keys, provider)
      }

      const requirements = formData.requirements.map((i) => ({ requirement: i.requirement.trim() })).filter(i => i.requirement.length > 0)

      const round: any = {
        roundMetadata: {
          name: formData.name,
          roundType: 'private',
          eligibility: {
            description: formData.description,
            requirements,
          },
          quadraticFundingConfig: {
            matchingFundsAvailable: formData.amount,
            matchingCap: false,
            sybilDefense: formData.sybilDefense
          }
        },
        roundStartTime: formData.roundDate.from,
        roundEndTime: formData.roundDate.to,
        applicationsStartTime: formData.applicationDate.from,
        applicationsEndTime: formData.applicationDate.to,
        token: ethers.constants.AddressZero,
        operatorWallets: [address as string],
        approvedProjects: [],
        finalized: false
      }

      if (formData.support && formData.support.length > 0) {
        round.roundMetadata.support = { type: "Email", info: formData.support }
      }

      await deployQFRound({ programName: formData.name, programAddress: formData.program, operatorWallets: round.operatorWallets, _round: round, signer: deployerSigner as Signer })
    }
  }

  const CurrentView = views[viewIndex]

  return (
    <main
      className={`flex mt-36 flex-col max-w-md mx-auto items-center justify-center ${inter.className}`}
    >
      {viewIndex === views.length - 1 && <div className={`-z-50 absolute top-0 left-0 w-full h-full bg-cover bg-[url('/confetti.svg')]`} />}
      <CurrentView data={formData} burnerAddress={burnerWallet.address} toggleNext={toggleNextView} />
    </main>
  )
}
