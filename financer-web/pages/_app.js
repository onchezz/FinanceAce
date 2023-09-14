import Head from "next/head";
import { StarknetConfig, InjectedConnector } from '@starknet-react/core'

export default function App({ Component, pageProps }) {
  const connectors = [
    new InjectedConnector({ options: { id: "braavos" } }),
    new InjectedConnector({ options: { id: "argentX" } }),
  ];
  
 
  return (
    
          <StarknetConfig connectors={connectors}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
      </StarknetConfig>
    
  );
}
