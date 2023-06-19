import * as z from 'zod'

export enum DEPLOYSTATUS {
  NOT_STARTED,
  WAITING,
  TX,
  COMPLETED,
  FAILED,
}

export type Steps = 'Program' | 'Preparation' | 'Voting' | 'Payout' | 'Round'
//  | 'Indexing'

export interface DeployStepItem {
  status: DEPLOYSTATUS
  message: string
  data?: any
}

export const formSchema = z.object({
  name: z.string().min(1, {
    message: 'Please provide a round name.',
  }),
  program: z.string().default(''),
  applicationDate: z.object({
    from: z.date(),
    to: z.date(),
  }),
  roundDate: z.object({
    from: z.date(),
    to: z.date(),
  }),
  // tslint:disable-next-line
  amount: z.preprocess(
    (i) => {
      const result = z.string().transform(Number).safeParse(String(i))

      return result.success ? result.data : result.error
    },
    z.number().gt(0, {
      message: "You can't have a round with 0 ETH matching",
    })
  ),
})

export type FormSchema = z.infer<typeof formSchema>

export interface FormSchemaWithConfig extends FormSchema {
  config: {
    useBurner: boolean
  }
}

export interface BurnerWallet {
  keys: string
  address: `0x${string}`
}
