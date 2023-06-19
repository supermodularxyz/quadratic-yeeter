import { Button } from "@/components/ui/button"
import { FormSchemaWithConfig } from "@/types/yeeter"
import { format } from "date-fns"

interface Props {
  data?: FormSchemaWithConfig
  burnerAddress?: `0x${string}`
  toggleNext: (data?: FormSchemaWithConfig) => void
}

const formatDate = (date: Date) => format(date, "MMM d, yyyy")

const Preview = ({ data, toggleNext }: Props) => {

  return (<>
    <div className='mb-8 text-xl font-bold'>Quadratic Yeeter</div>
    <div className="flex flex-col w-full mt-6 px-4 space-y-5">
      <div className="w-full border-b pb-6">
        <h2 className="mb-1 text-sm">Round Name</h2>
        <span>{data?.name}</span>
      </div>
      <div className="w-full border-b pb-6">
        <h2 className="mb-1 text-sm">ETH Matching Amount</h2>
        <span>{data?.amount} ETH</span>
      </div>
      <div className="w-full border-b pb-6">
        <h2 className="mb-1 text-sm">Application Period</h2>
        <span>{formatDate(data?.applicationDate.from as Date)} - {formatDate(data?.applicationDate.to as Date)}</span>
      </div>
      <div className="w-full pb-6">
        <h2 className="mb-1 text-sm">Round Period</h2>
        <span>{formatDate(data?.roundDate.from as Date)} - {formatDate(data?.roundDate.to as Date)}</span>
      </div>
    </div>
    <div className="mt-4 flex flex-1 items-center justify-center">
      <Button onClick={() => toggleNext()}>Yeet Round</Button>
    </div>
  </>)
}

export default Preview