/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button"
import { FormSchemaWithConfig } from "@/types/yeeter"
import { format } from "date-fns"

interface Props {
  data?: FormSchemaWithConfig
  burnerAddress?: `0x${string}`
  toggleNext: (data?: FormSchemaWithConfig, roundId?: string) => void
}

const Completed = ({ data }: Props) => {

  return (<>
    <div className="w-full p-8 mt-24 rounded-xl bg-brand-dark">
      <div className='mb-8 text-4xl font-bold text-brand-green text-center'>Congratulations</div>
      <div className="flex flex-col w-full mt-6 space-y-5 text-center text-white font-normal">
        Your Round is now live.  Please click 'View Round' to manage it over on the Gitcoin Round Manager.
      </div>
      <div className="mt-12 flex flex-1 items-center justify-center">
        <Button asChild className="w-[200px] rounded-full py-4">
          <a href={`https://manager.gitcoin.co/#/round/${data?.config.roundId}`} target="_blank">View Round</a>
        </Button>
      </div>
    </div>
  </>)
}

export default Completed