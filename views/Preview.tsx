import { Button } from "@/components/ui/button"
import { FormSchemaWithConfig } from "@/types/yeeter"
import classNames from "classnames"
import { format } from "date-fns"
import { ReactNode, useMemo } from "react"

interface Props {
  data?: FormSchemaWithConfig
  burnerAddress?: `0x${string}`
  toggleNext: (data?: FormSchemaWithConfig, roundId?: string) => void
}

interface ListItem {
  title: string
  value: string | ReactNode
}

const formatDate = (date: Date) => format(date, "MMM d, yyyy")

const Preview = ({ data, toggleNext }: Props) => {

  console.log({ data })

  const listItems = useMemo(() => {
    const list: ListItem[] = [
      { title: "Round Name", value: data?.name as string },
      { title: "ETH Matching Amount", value: `${data?.amount} ETH` }
    ]

    if (data?.description) {
      list.push({ title: "Round description", value: data?.description as string })
    }

    if (data?.support) {
      list.push({ title: "Support Email", value: data?.support as string })
    }

    list.push({ title: "Enable Passport", value: data?.sybilDefense ? "Yes" : "No" })

    if (data?.requirements && (data.requirements.length || 0) > 0) {
      const req = data.requirements.map((i) => <span key={i.requirement}>• {i.requirement}</span>)
      list.push({ title: "Eligibility requirements", value: req })
    }

    return [...list,
    { title: "Application Period", value: `${formatDate(data?.applicationDate.from as Date)} - ${formatDate(data?.applicationDate.to as Date)}` },
    { title: "Round Period", value: `${formatDate(data?.roundDate.from as Date)} - ${formatDate(data?.roundDate.to as Date)}` }]
  }, [data])

  return (<>
    <div className="w-full p-8 rounded-xl bg-brand-dark">
      <div className='mb-8 text-4xl font-bold text-brand-green'>Quadratic Yeeter</div>
      <div className="flex flex-col w-full mt-6 space-y-5 font-normal">
        {listItems.map(({ title, value }, i) => <div key={title} className={classNames("w-full pb-6", { "border-b border-brand-bg": i !== listItems.length - 1 })}>
          <h2 className="mb-1 text-sm text-white">{title}</h2>
          <span className="text-brand-green flex flex-1 flex-col">{value}</span>
        </div>)}
      </div>
    </div>
    <div className="mt-12 flex flex-1 items-center justify-center">
      <Button className="w-[200px] rounded-full py-4" onClick={() => toggleNext()}>Yeet Round</Button>
    </div>
  </>)
}

export default Preview