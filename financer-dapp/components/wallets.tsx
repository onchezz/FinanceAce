    "use client"

  import * as React from "react"
  import {useConnectors,useAccount}from '@starknet-react/core'
  import { Button } from "@/components/ui/button"
  import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  
  export function Wallets() {
    const [position, setPosition] = React.useState("bottom")
    const { connect,available, refresh } = useConnectors()
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button >Connect Wallet</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel> Wallets</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
         {available.map((connector) => (
        <li key={connector.id} >
          <Button className="btn rounded-md p-5 m-2 list-none" onClick={() => connect(connector)} >
         {connector.name}
            </Button> 
        
        </li>
      ))}

          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }
  