import { Steps } from '@/types/yeeter'
import { DeployStepItem } from '../types/yeeter'

const deployEvents = async (data: Partial<Record<Steps, DeployStepItem>>) => {
  const e = new CustomEvent('deploying', { detail: data })
  document.dispatchEvent(e)
}

export const delay = async (time: number) => {
  return new Promise((resolve) => setTimeout(resolve, time))
}

export const formatAddress = (address: string) => {
  return `${address.slice(0, 6)}...${address.slice(-6)}`
}

export default deployEvents
