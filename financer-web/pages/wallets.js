import {useConnectors,useAccount}from '@starknet-react/core'
import { Button, Text,Pressable, View, StyleSheet } from 'react-native'
import {useEffect,useMemo} from 'react'

export function Wallet() {
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

  
    return (
      status === 'connected'?<View styles={styles.container}>
      <Text styles={styles.text}>Wallet Connected</Text>
      <Text  styles={styles.text}> {shortenedAddress}</Text>
      <Pressable  onPress={()=>disconnect()} styles={styles.button}>
        Disconnect
      </Pressable>
      </View>:
      <View>
       
         {available.map((connector) => (
        <li key={connector.id}>
          <Pressable onPress={() => connect(connector)}  styles={styles.button}>
         
         {connector.name}
            </Pressable> 
        
        </li>
      ))}
      </View>
      
    )
  }
 
  
  

  const styles = StyleSheet.create({
    container: {
      // flex: 1,
      // alignSelf: "center"
      // justifyContent: "top-left",
      // alignItems: "center",
      // width: 100
    },
    text: {
      fontSize: 16,
    },
    button: {
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
    }
  });