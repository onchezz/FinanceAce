import { useAccount, useConnectors } from '@starknet-react/core'
import { Button, Text,Pressable, View, StyleSheet } from 'react-native'
// import { useMemo } from 'react'

export default function WalletConnected() {
  const { address } = useAccount()
  const { disconnect } = useConnectors()

  // const shortenedAddress = useMemo(() => {
  //   if (!address) return ''
  //   return `${address.slice(0, 6)}...${address.slice(-4)}`
  // }, [address])

  return (
    <View>
      <Text>Connected: {address}</Text>
      <Button onClick={disconnect}>Disconnect</Button>
    </View>
  )
}
