import type { AppProps } from "next/app"
import { GlobalStyles } from "twin.macro"
import { useApollo } from "../lib/apolloClient"
import { ApolloProvider } from "@apollo/client"
import React,{useState} from 'react'
import MemesProvider from './MemesProvider'
import "../components/Footer.css"
const App = ({ Component, pageProps }: AppProps) => {
  const apolloClient = useApollo(pageProps.initialApolloState, pageProps.token)
  
  return (
    <div>
      <GlobalStyles />
      <ApolloProvider client={apolloClient}>
      <MemesProvider>
        <Component {...pageProps} />
      </MemesProvider>
      </ApolloProvider>
    </div>
  )
}

export default App
