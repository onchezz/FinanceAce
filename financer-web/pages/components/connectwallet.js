import { useAccount, useConnectors } from '@starknet-react/core'
import { Button, Text,Pressable, View, StyleSheet } from 'react-native'

export default function ConnectWallet() {
    const { connectors, connect } = useConnectors()
  
    return (
      <View>
        <Text>Choose a wallet:</Text>
        <View> 
        {connectors.map((connector) => {
          return (
            <Button key={connector.id} onClick={() => connect(connector)}>
              {connector.id}
            </Button>
          )
        })}
        </View>
        
      </View>
    )
  }