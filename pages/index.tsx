import { useState, useEffect } from 'react'
import { Inter } from 'next/font/google'
import { ethers, Signer } from 'ethers'
import { useAccount, useSigner, useProvider } from 'wagmi';
import { deployQFRound } from '@/utils/deployer'
import { BurnerWallet, FormSchemaWithConfig } from '@/types/yeeter';
import { Edit, Preview, Progress } from '@/views';
const inter = Inter({ subsets: ['latin'] })

const defaultBurnerWallet = {
  keys: "",
  address: "" as `0x${string}`
}

const views = [Edit, Preview, Progress]


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

  const toggleNextView = (valuesWithConfig?: FormSchemaWithConfig) => {
    if (valuesWithConfig) {
      setFormData(valuesWithConfig)
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

      const round = {
        roundMetadata: {
          name: formData.name,
          roundType: 'private',
          quadraticFundingConfig: {
            matchingFundsAvailable: formData.amount,
            matchingCap: false
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

      await deployQFRound({ programName: formData.name, programAddress: formData.program, operatorWallets: round.operatorWallets, _round: round, signer: deployerSigner as Signer })
    }
  }

  const CurrentView = views[viewIndex]

  return (
    <main
      className={`flex mt-36 flex-col max-w-sm mx-auto items-center justify-center ${inter.className}`}
    >
      <CurrentView data={formData} burnerAddress={burnerWallet.address} toggleNext={toggleNextView} />
    </main>
  )
}
