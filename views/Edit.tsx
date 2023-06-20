import { useState, useEffect } from 'react'
import { useAccount, useSigner, useBalance, useNetwork } from 'wagmi';
import { addDays, addHours, addMonths } from 'date-fns'
import { zodResolver } from '@hookform/resolvers/zod'
import { useFieldArray, useForm } from 'react-hook-form'
import { parseEther } from 'viem'
import { fetchFromIPFS } from '@/utils/utils'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import DateRangePicker from '@/components/DateRangePicker'
import { useCopyToClipboard } from 'usehooks-ts'
import { DateRange } from 'react-day-picker'
import { Switch } from '@/components/ui/switch'
import { useFetchMyProgramsQuery } from '@/gql/types.generated';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { formSchema, FormSchema, FormSchemaWithConfig } from '@/types/yeeter';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Textarea } from '@/components/ui/textarea';
import { XMarkIcon } from '@heroicons/react/20/solid';

const formatAddress = (address: string) => {
  return address ? `${address.slice(0, 6)}...${address.slice(-6)}` : ""
}

interface Props {
  data?: FormSchemaWithConfig
  burnerAddress: `0x${string}`
  toggleNext: (data?: FormSchemaWithConfig, roundId?: string) => void
}

const Edit = ({ burnerAddress, toggleNext }: Props) => {
  const [fundAmount, setFundAmount] = useState<number>(0)
  const [useBurner, setUseBurner] = useState<boolean>(false)
  const [myPrograms, setMyPrograms] = useState<{ name: string, address: string }[]>([])
  const [, copy] = useCopyToClipboard()
  const { address } = useAccount()
  const { data: signer } = useSigner()
  const { data: burnerBalance } = useBalance({ addressOrName: burnerAddress })
  const { chain } = useNetwork()
  const { refetch } = useFetchMyProgramsQuery({
    context: {
      clientName: String(chain?.id || 1)
    },
    variables: {
      address: (address ?? "").toLowerCase()
    },
    onCompleted: async (data) => {
      if (data?.programAccounts && data?.programAccounts.length > 0) {

        const programData = await Promise.all(Array.from(new Map(data.programAccounts.map(v => [v.program.id, v])).values()).map(async (p) => {
          const resp = await fetchFromIPFS(p.program.metaPtr.pointer as string)

          return { ...resp, address: p.program.id }
        }))

        setMyPrograms(programData)
      } else {
        setMyPrograms([])
      }
    },
  })

  useEffect(() => {
    if (chain?.id) {
      refetch && refetch()
    }
  }, [refetch, chain?.id])

  const defaultValues = {
    name: "My First Quadratic Yeet",
    program: "",
    description: "",
    support: "",
    sybilDefense: false,
    requirements: [],
    applicationDate: {
      from: addHours(new Date, 2),
      to: addMonths(addHours(new Date, 2), 1)
    },
    roundDate: {
      from: addHours(new Date, 2),
      to: addMonths(addHours(new Date, 2), 1)
    },
    amount: 6.9
  }

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues,
  })

  const { fields: requirementsFields, prepend, remove } = useFieldArray({
    control: form.control,
    name: "requirements"
  })

  const handleYeet = (value: FormSchema) => {
    // send data back up
    toggleNext({ ...value, config: { useBurner } })
  }

  return (<>
    <div className='flex flex-1 flex-col p-6 rounded-xl bg-brand-dark'>
      <h1 className='mb-8 text-4xl font-bold text-brand-green'>Quadratic Yeeter</h1>
      <div className="w-full mb-4 rounded-md text-white">
        <div className='mb-4 text-sm italic'>
          You can use a burner wallet to deploy all the necessary contracts without having to sign transactions with your main wallet multiple times.
        </div>
        <div className='flex flex-1 justify-between items-center'>
          <div className='text-sm flex flex-row'>
            <span className='mr-2'>
              {formatAddress(burnerAddress)}
            </span>
            {burnerBalance && <span className='mr-2'>
              ({burnerBalance?.formatted.slice(0, 6)} {burnerBalance?.symbol})
            </span>}
            <span role="button" onClick={() => copy(burnerAddress)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
            </svg>
            </span>
          </div>
          <Switch checked={useBurner} onCheckedChange={() => setUseBurner(!useBurner)} />
        </div>
        {useBurner && <div className='mt-8'>
          <div className='flex items-center w-full space-x-2'>
            <Input type="number" placeholder='Amount to fund' value={fundAmount} onChange={(i) => setFundAmount(Number(i.target.value))} />
            <Button className="whitespace-nowrap" type="submit" onClick={async () => {
              await signer?.sendTransaction({
                to: burnerAddress,
                value: parseEther(`${fundAmount}`)
              })
            }}>Fund</Button>
          </div>
          <div className='flex items-end justify-end mt-2'>
            <a className='text-red-400 hover:text-red-200 underline italic text-sm' href='#'>drain burner wallet</a>
          </div>
        </div>}
      </div>
    </div>
    <div className="w-full mb-12 mt-4">
      <Form {...form}>
        <form className='flex flex-col w-full items-center' onSubmit={form.handleSubmit(handleYeet)}>

          <div className='w-full rounded-xl bg-brand-dark p-6'>
            <FormField control={form.control} name="name" render={({ field }) => (
              <FormItem className='w-full mb-6'>
                <FormLabel>Round Name</FormLabel>
                <FormControl>
                  <Input type="string" placeholder='X QF Round' {...field} />
                </FormControl>
              </FormItem>
            )} />

            <FormField control={form.control} name="amount" render={({ field }) => (
              <FormItem className='w-full mb-6'>
                <FormLabel>ETH Matching Amount</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="ETH Matching Amount" {...field} />
                </FormControl>
              </FormItem>
            )} />
          </div>

          <Collapsible className='w-full'>
            <CollapsibleTrigger className='w-full my-3'>
              <div className='flex flex-1 justify-center text-sm text-brand-green'><span>Advanced settings</span></div>
            </CollapsibleTrigger>
            <CollapsibleContent>

              <div className='w-full rounded-xl bg-brand-dark p-6'>
                {myPrograms.length > 0 && <FormField
                  control={form.control}
                  name="program"
                  render={({ field }) => (
                    <FormItem className='w-full mb-6'>
                      <FormLabel>Program</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select an existing program" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {myPrograms.map((p) => <SelectItem value={p.address} key={`${chain?.id}-${p.address}`}>{p.name}</SelectItem>)}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )} />}

                <FormField control={form.control} name="description" render={({ field }) => (
                  <FormItem className='w-full mb-6'>
                    <FormLabel>Round description</FormLabel>
                    <FormControl>
                      <Textarea placeholder='Add a round description text' className='resize-none' {...field} />
                    </FormControl>
                  </FormItem>
                )} />

                <FormField control={form.control} name="support" render={({ field }) => (
                  <FormItem className='w-full mb-6'>
                    <FormLabel>Support Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="Eg. support@ourdao.com" {...field} />
                    </FormControl>
                  </FormItem>
                )} />

                <FormField control={form.control} name="sybilDefense" render={({ field }) => (
                  <FormItem className='flex items-center justify-between w-full mb-6'>
                    <FormLabel>Enable Passport?</FormLabel>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )} />

                <div className='w-full mb-6'>
                  <div className='flex items-center justify-between mb-2'>
                    <FormLabel>Round Eligibility Requirements</FormLabel>
                    <Button type='button' className='mr-0 pr-0' variant="link" onClick={() => prepend({ requirement: "" })}>Add a requirement</Button>
                  </div>
                  <div className='flex flex-1 flex-col w-full space-y-2'>
                    {requirementsFields.length === 0 ? <div className='w-full text-brand-green'>No eligibility requirements added.</div>
                      : requirementsFields.map((field, index) => <div className='flex flex-1 justify-between items-center' key={field.id}>
                        <Input type="text" placeholder="Enter a requirement" {...form.register(`requirements.${index}.requirement`)} />
                        <Button type='button' className='px-1' variant="link" onClick={() => remove(index)}>
                          <XMarkIcon className='w-8 h-8' />
                        </Button>
                      </div>)}
                  </div>
                </div>

                <FormField control={form.control} name="applicationDate" render={({ field }) => (
                  <FormItem className='w-full mb-6'>
                    <FormLabel>Application period</FormLabel>
                    <FormControl>
                      <DateRangePicker from={defaultValues.applicationDate.from} selected={field.value as DateRange} selectionHandler={field.onChange} placeholder="Application start & end dates" />
                    </FormControl>
                  </FormItem>
                )} />

                <FormField control={form.control} name="roundDate" render={({ field }) => (
                  <FormItem className='w-full mb-6'>
                    <FormLabel>Round period</FormLabel>
                    <FormControl>
                      <DateRangePicker from={defaultValues.roundDate.from} selected={field.value as DateRange} selectionHandler={field.onChange} placeholder="Round start & end dates" />
                    </FormControl>
                  </FormItem>
                )} />
              </div>
            </CollapsibleContent>
          </Collapsible>

          <Button className="whitespace-nowrap mt-2" type="submit">Yeet Round</Button>
        </form>
      </Form>
    </div>
  </>)
}

export default Edit
