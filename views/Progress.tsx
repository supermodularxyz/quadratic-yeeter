import { useEffect, useState } from "react"
import { CheckIcon, XMarkIcon } from '@heroicons/react/20/solid'
import { FormSchemaWithConfig, DEPLOYSTATUS, Steps, DeployStepItem } from "@/types/yeeter"
import classNames from "classnames"
import { Button } from "@/components/ui/button"
import { delay } from "@/utils/deployEvents"

interface Props {
  data?: FormSchemaWithConfig
  burnerAddress?: `0x${string}`
  toggleNext: (data?: FormSchemaWithConfig, roundId?: string) => void
}

const defaultDeployStatus: Record<Steps, DeployStepItem> = {
  Program: {
    status: DEPLOYSTATUS.NOT_STARTED,
    message: "Waiting to start..."
  },
  Preparation: {
    status: DEPLOYSTATUS.NOT_STARTED,
    message: "Waiting to start..."
  },
  Voting: {
    status: DEPLOYSTATUS.NOT_STARTED,
    message: "Waiting to start..."
  },
  Payout: {
    status: DEPLOYSTATUS.NOT_STARTED,
    message: "Waiting to start..."
  },
  Round: {
    status: DEPLOYSTATUS.NOT_STARTED,
    message: "Waiting to start..."
  },
  // Indexing: {
  //   status: DEPLOYSTATUS.NOT_STARTED,
  //   message: "Waiting to start..."
  // }
}

const Progress = ({ toggleNext }: Props) => {
  const [deployStatus, setDeployStatus] = useState<Record<Steps, DeployStepItem>>(defaultDeployStatus)

  useEffect(() => {
    const handleStatusEvent = (e: Event) => {
      const update = (e as CustomEvent).detail as Partial<Record<Steps, DeployStepItem>>

      console.log('STATUS UPDATE', (Object.values(update) || [])[0].message, update)

      setDeployStatus({ ...deployStatus, ...update })

      if ((Object.keys(update) || [])[0] === 'Round' && (Object.values(update) || [])[0].status === DEPLOYSTATUS.COMPLETED) {
        const roundAddress = (Object.values(update) || [])[0].data?.roundAddress as string;
        setTimeout(() => toggleNext(undefined, roundAddress), 1000)
      }
    }

    document.addEventListener('deploying', handleStatusEvent)

    return () => document.removeEventListener('deploying', handleStatusEvent)
  }, [deployStatus, toggleNext])

  return (<>
    <div className="w-full p-8 rounded-xl bg-brand-dark">
      <div className='mb-8 text-4xl font-bold text-brand-green'>Quadratic Yeeter</div>
      <div className="flex flex-col w-full mt-6 px-4">
        <div className="flow-root">
          <ul role="list" className="-mb-8">
            {Object.keys(deployStatus).map((statusKey, eventIdx) => {
              const statusItem = deployStatus[statusKey as Steps]
              const isNotStarted = statusItem.status === DEPLOYSTATUS.NOT_STARTED
              const Icon = statusItem.status === DEPLOYSTATUS.FAILED ? XMarkIcon : CheckIcon
              return (
                <li key={statusKey}>
                  <div className={classNames({ "opacity-50": isNotStarted }, "relative pb-8 text-white")}>
                    {eventIdx !== Object.keys(deployStatus).length - 1 ? (
                      <span className="absolute left-4 top-4 -ml -px h-[50px] w-0.5 bg-gray-200" aria-hidden="true" />
                    ) : null}
                    <div className="relative flex space-x-3">
                      <div>
                        <span
                          className={classNames({
                            "bg-gray-500": (statusItem.status !== DEPLOYSTATUS.COMPLETED && statusItem.status !== DEPLOYSTATUS.FAILED),
                            "bg-red-500": statusItem.status === DEPLOYSTATUS.FAILED,
                            "bg-brand-green": statusItem.status === DEPLOYSTATUS.COMPLETED,
                          },
                            'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-brand-dark'
                          )}
                        >
                          <Icon className="h-5 w-5 text-white" aria-hidden="true" />
                        </span>
                      </div>
                      <div className="flex min-w-0 flex-1 justify-between space-x-4">
                        <div>
                          <p className="font-base">
                            {statusKey}
                          </p>
                          <p className={classNames("text-sm text-brand-green")}>
                            {statusItem.message}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  </>)
}

export default Progress