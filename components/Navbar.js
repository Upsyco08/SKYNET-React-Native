import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Navbar = () => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.navtext1}>SKY</Text>
      <Text style={styles.navtext2}>NET.</Text>
    </View>
  )
}

export default Navbar

const styles = StyleSheet.create({
    navbar:{
        backgroundColor: 'white',
        height: '8%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    navtext1:{
        color: 'gold',
        fontSize: 20,
        fontWeight: 'bold'
      },
      navtext2:{
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold'
    }
})