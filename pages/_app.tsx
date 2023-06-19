import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import React from "react";
import { WagmiConfig } from "wagmi";
import { ApolloClient, ApolloLink, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client'

import { chains, client as wagmiConfig } from "@/utils/wagmi";
// import { CreateProgramProvider } from '@/context/program/CreateProgramContext';
// import { ReadProgramProvider } from '@/context/program/ReadProgramContext';
// import { CreateRoundProvider } from '@/context/round/CreateRoundContext';
import Nav from '@/components/Nav';

const mainnetSugraph = new HttpLink({
  uri: "https://api.studio.thegraph.com/query/32278/allo-grants-graph/v0.0.3"
})

const goerliSubgraph = new HttpLink({
  uri: "https://api.thegraph.com/subgraphs/name/gitcoinco/grants-round-goerli-testnet"
})

const fantomSubgraph = new HttpLink({
  uri: "https://api.thegraph.com/subgraphs/name/gitcoinco/grants-round-fantom-mainnet"
})

const optimismSubgraph = new HttpLink({
  uri: "https://api.thegraph.com/subgraphs/name/gitcoinco/grants-round-optimism-mainnet"
})

const cache = new InMemoryCache()

const client = new ApolloClient({
  link: ApolloLink.split((operation) => operation.getContext().clientName === '5', goerliSubgraph, ApolloLink.split((operation) => operation.getContext().clientName === '1', mainnetSugraph, ApolloLink.split((operation) => operation.getContext().clientName === '10', optimismSubgraph, fantomSubgraph))),
  cache,
  connectToDevTools: true
})

/**
 * 
  programAccounts(where: {address: "0x00de4b13153673bcae2616b67bf822500d325fc3"}) {
    address
    id
    program {
      id
    }
  }
}
 */

export default function App({ Component, pageProps }: AppProps) {
  return <ApolloProvider client={client}>
    <WagmiConfig client={wagmiConfig}>
      <RainbowKitProvider coolMode chains={chains}>
        <Nav />
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  </ApolloProvider>
}
