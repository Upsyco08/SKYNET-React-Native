import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footertext}>SKYNET.</Text>
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({
  footer:{
    backgroundColor: 'gold',
    height: '12%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  footertext:{
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  }
})