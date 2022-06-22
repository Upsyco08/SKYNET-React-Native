import { View, Text, StyleSheet, Image, Button } from 'react-native'
import React from 'react'

const Card = (props) => {
    return (
    <View style={styles.card}>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.excerpt}>{props.excerpt}</Text>
          <Text style={styles.author}>👤{props.author}</Text>
    </View>
  )
}

export default Card

const styles= StyleSheet.create({
    card:{
        borderRadius: 5,
        alignItems: 'center'
    },
    title:{
        marginVertical: 5,
        marginHorizontal: 10,
        fontSize: 18,
        fontWeight: 'bold',
    },
    excerpt:{
        marginVertical: 5,
        marginHorizontal: 10,
        fontSize: 12,
        textAlign: 'justify'
    },
    author:{
        marginVertical: 5,
        marginHorizontal: 10,
        fontSize: 10,
        color: 'grey'
    },
})