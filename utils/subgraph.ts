export enum ChainId {
  MAINNET = 1,
  GOERLI_CHAIN_ID = 5,
  OPTIMISM_MAINNET_CHAIN_ID = 10,
  FANTOM_MAINNET_CHAIN_ID = 250,
  FANTOM_TESTNET_CHAIN_ID = 4002,
  MUMBAI = 80001,
}

const getGraphQLEndpoint = async (chainId: ChainId) => {
  switch (chainId) {
    case ChainId.MAINNET:
      return `${process.env.NEXT_PUBLIC_SUBGRAPH_MAINNET_API}`

    case ChainId.OPTIMISM_MAINNET_CHAIN_ID:
      return `${process.env.NEXT_PUBLIC_SUBGRAPH_OPTIMISM_MAINNET_API}`

    case ChainId.FANTOM_MAINNET_CHAIN_ID:
      return `${process.env.NEXT_PUBLIC_SUBGRAPH_FANTOM_MAINNET_API}`

    case ChainId.FANTOM_TESTNET_CHAIN_ID:
      return `${process.env.NEXT_PUBLIC_SUBGRAPH_FANTOM_TESTNET_API}`

    case ChainId.GOERLI_CHAIN_ID:
    default:
      return `${process.env.NEXT_PUBLIC_SUBGRAPH_GOERLI_API}`
  }
}

export const graphql_fetch = async (
  query: string,
  chainId: ChainId,
  variables: object = {},
  fromProjectRegistry = false
) => {
  let endpoint = await getGraphQLEndpoint(chainId)

  if (fromProjectRegistry) {
    endpoint = endpoint.replace('grants-round', 'grants-hub')
  }

  return fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query, variables }),
  }).then((resp) => {
    if (resp.ok) {
      return resp.json()
    }

    return Promise.reject(resp)
  })
}

export async function getCurrentSubgraphBlockNumber(chainId: number): Promise<number> {
  if (chainId === ChainId.MUMBAI || chainId === 31337) {
    return 44502505900
  }

  const res = await graphql_fetch(
    `
      {
        _meta {
          block {
            number,
            hash
          }
        }
      }
    `,
    chainId
  )
  return res.data._meta.block.number
}

export async function waitForSubgraphSyncTo(
  chainId: number,
  blockNumber: number,
  pollIntervalInMs = 1000
): Promise<number> {
  let currentBlockNumber = await getCurrentSubgraphBlockNumber(chainId)
  while (currentBlockNumber < blockNumber) {
    await wait(pollIntervalInMs)
    currentBlockNumber = await getCurrentSubgraphBlockNumber(chainId)
  }
  return currentBlockNumber
}

const wait = (ms = 1000) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
