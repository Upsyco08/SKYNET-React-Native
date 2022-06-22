import React, { useState } from 'react'
import { View, StyleSheet, FlatList, Button } from 'react-native'

import Card from './Card'
import Post from './Post'
import { cardData } from '../Data'


const Content = () => {
  const [openContent, setOpenContent] = useState(false)
  const [content, setContent] = useState([])

  const renderItem = ({ item }) => (
    <View style={styles.contentViewCard}>
      <Card title={item.title} excerpt={item.excerpt} author={item.author}/>
      <View style={styles.openButton}>
        <Button title="Open Post"  onPress={()=>(setOpenContent(!openContent), setContent(item))} />
      </View>
    </View>
  );
  
  return (
    <View style={styles.content} >
      { !openContent && 
        <FlatList data={cardData} renderItem={renderItem} keyExtractor={ item => item.id} />}
      { openContent &&
        <View style={styles.contentViewPost}>
          <Post title={content.title} fullData={content.fullData} author={content.author}  /> 
          <View style={styles.closeButton} >
            <Button  title="Close Post" onPress={()=>setOpenContent(!openContent)} />
          </View>
        </View>
      }
    </View>
  )
}

export default Content

const styles = StyleSheet.create({    
  content:{
    backgroundColor: '#dddddd',
    height: '80%',
    paddingTop:5,
    paddingBottom: 5,
  },
  contentViewCard:{
    alignItems: 'center',
    margin: 5,
    marginHorizontal: 10,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  contentViewPost:{
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
    marginHorizontal: 10,
    height: '98%',
    backgroundColor: 'white',
    borderRadius: 5,
  },
  openButton:{
    backgroundColor: '#dddddd',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginVertical: 10
  },
  closeButton:{
    backgroundColor: '#dddddd',
    alignItems: 'center',
    height: '7.5%',
    width: '26%',
    marginHorizontal: 0,
    justifyContent: 'center',
    borderRadius: 10,
    marginVertical: 8
  },
})
