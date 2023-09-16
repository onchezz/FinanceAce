    "use client"

  import * as React from "react"
  import {useConnectors,useAccount}from '@starknet-react/core'
  import { Button } from "@/components/ui/button"
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

import Image from 'next/image'
 
  export function Wallets() {
    const { connect,connectors,available,refresh } = useConnectors()
    React.useEffect(() => {
      const interval = setInterval(refresh, 5000)
      return () => clearInterval(interval)
    }, [refresh])
  
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button >Connect Wallet</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel> Wallets</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup asChild>
      
          <ul>
       
          {connectors.map((wallet) => (
            <li key={wallet.id}>
          <Button className="mb-2" onClick={() => connect(wallet)}>
             {wallet.id} Wallet
          </Button>

          
         
        </li>
      ))}
    </ul>
        
          </DropdownMenuGroup>

        </DropdownMenuContent>
      </DropdownMenu>
    )
  }
  