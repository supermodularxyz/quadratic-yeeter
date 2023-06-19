import { Steps } from '@/types/yeeter'
import { DeployStepItem } from '../types/yeeter'

const deployEvents = async (data: Partial<Record<Steps, DeployStepItem>>) => {
  const e = new CustomEvent('deploying', { detail: data })
  document.dispatchEvent(e)
}

export const delay = async (time: number) => {
  return new Promise((resolve) => setTimeout(resolve, time))
}

export default deployEvents
