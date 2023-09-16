'use client';

import Navbar from '@/components/navbar';
import { InjectedConnector, StarknetConfig } from '@starknet-react/core'


export default function Home() {
  const connectors = [
    new InjectedConnector({ options: { id: 'braavos' } }),
    new InjectedConnector({ options: { id: 'argentX' } }),
  ]

  return (
    <StarknetConfig autoConnect connectors={connectors}>
   <main className=" min-h-screen  w-screen">
    <div>
      <Navbar/>

    </div>
    <div className='flex justify-end  w-screen bg-red-600'>
    {/* <Wallet/> */}
    </div>
  

    </main>
    </StarknetConfig>
  )
}