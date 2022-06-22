import { View, Text, StyleSheet, Image, Button, ScrollView } from 'react-native'
import React from 'react'

const Post = (props) => {
    return (
    <ScrollView>
        <View style={styles.post}>
          <Text style={styles.title}>{props.title}</Text>
          <Image source={require(`../assets/1.jpeg`)} style={styles.image} />
          <Text style={styles.data}>{props.fullData}</Text>
          <Text style={styles.author}>👤{props.author}</Text>
        </View>
    </ScrollView>
  )
}

export default Post

const styles= StyleSheet.create({
    post:{
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'white',
        height: '93%',
        alignItems: 'center',
    },
    title:{
        marginVertical: 5,
        marginHorizontal: '5%',
        fontSize: 22,
        fontWeight: 'bold'
    },
    data:{
        marginVertical: 5,
        marginHorizontal: '5%',
        fontSize: 18,
        textAlign: 'justify'
    },
    author:{
        marginVertical: 5,
        marginHorizontal: '5%',
        fontSize: 10,
        color: 'grey'
    },
    image:{
        marginVertical: 5,
        marginHorizontal: '5%',
        width: '90%',
        backgroundColor: 'white'
    }
})