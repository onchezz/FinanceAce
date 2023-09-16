'use client'
import {useConnectors,useAccount}from '@starknet-react/core'
import {useEffect,useMemo} from 'react'
import { Button } from "@/components/ui/button"
import { Wallets } from './wallets'

export default function Navbar(){
    const { connect,disconnect, connectors, available, refresh } = useConnectors()
  const { account, address, status } = useAccount()
  const shortenedAddress = useMemo(() => {
    if (!address) return ''
    return `${address.slice(0, 6)}...${address.slice(-4)}`
  }, [address])

  useEffect(() => {
    const interval = setInterval(refresh, 5000)
    return () => clearInterval(interval)
  }, [refresh])

    return(
        <div className="navbar bg-base-200">
        <div className="flex-1 px-2 lg:flex-none">
          <a className="text-lg font-bold">Financer</a>
        </div> 
        <div className="flex justify-end flex-1 px-2">
          <div className="flex items-stretch">
    
        {    status === 'connected'?
      <div className=''>
      <span >Wallet Connected</span>
      <span  > {shortenedAddress}</span>
      <Button className="ml-2" onClick={()=>disconnect()}>
        Disconnect
      </Button>
      </div>:
       <Wallets/>
}
          </div>
        </div>
      </div>
    )
}

