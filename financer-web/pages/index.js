import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {Wallet ,WalletConnected,ConnectWallet } from "./wallets";
export default function App() {
 
  return (
  
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Expo + Next.js 👋</Text>
  <View style={styles.container} >
  <Wallet/>
  </View>
 
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    // alignItems: "center",
  },
  walletBar:{
    // justifyContent: "space-around",
    alignSelf: "flex-end",
    alignItems: "flex-end",
    // paddingVertical: 12,
    // paddingHorizontal: 32,
  },
  text: {
    fontSize: 16,
  },
});
