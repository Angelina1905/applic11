import React, { useState, useContext } from 'react';
import { View, Button, Text  } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ListItem from './ListItem';




export default function Statistika() {
  const [ListOfItems, setListOfItems] = useState ([
    {text:'1 час, рисование', key: '1'},
    {text:'30 минут, сон', key: '2'},
    {text:'2 часа, теннис', key: '3'},
  ])
  
  
  
  const addHandler = (text) => {  
    setListOfItems((list) => {
      return [
        {text:  text, key: Math.random().toString(36).substring(7)},
        ...list
      ]
    })
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <FlatList data={ListOfItems} renderItem={({item}) =>( 
        <ListItem el={item} />
       )  } ></FlatList>
    </View>
  )
}  
