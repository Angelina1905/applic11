import React, { useState, useContext } from 'react'
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Button,
  Image,
  Item,
} from 'react-native';
import Checkbox from 'expo-checkbox';
import Form from './Form';
import ListItem from './ListItem';




export default function Zapis({  }) {


// const [rests, setRests] = useState ([
//   {time:'', activity: '', details: '', emotions: '', feelings: ''},
//   {time:'', activity: '', details: '', emotions: '', feelings: ''},
//   {time:'', activity: '', details: '', emotions: '', feelings: ''},
// ]);

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

  //  const addRest = (rest)  => {
  //   setRests((list) => {
  //     rest.key = Math.random().toString();
  //     return [
  //       rest,
  //       ...list
  //     ]
  //   })
  //  }

    // const DATA = [
    //   {
    //     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    //     title: 'Сон',
    //     image: require('../assets/ASleepIcon.png'),
    //   },
    //   {
    //     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    //     title: 'Прогулка',
    //     image: require('../assets/ASleepIcon.png'),
    //   },
    //   {
    //     id: '58694a0f-3da1-471f-bd96-145571e29d72',
    //     title: 'Общение',
    //     image: require('../assets/ASleepIcon.png'),
    //   },
    // ];
    
 
    
   

      return (
    <View style={{backgroundColor: 'white'}}> 
    
       <Form addHandler={addHandler} />
       <FlatList data={ListOfItems} renderItem={({item}) =>( 
        <ListItem  el={item} />
       )  } ></FlatList>
  <Image style={styles.icPic}
        source={require('../assets/wh.jpg')}
      />
    </View>
    
        
      );
        }
          
    
     
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
      },
      
      item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
      title: {
        fontSize: 22,
      },
      butFirst: {
      backgroundColor: "#E07513",
    padding: 12,
    borderRadius: 27,
    width: 290,
    left: 75,
  },
  buttonText: {
    textAlign: 'center',
    color: "white",
    fontSize: 22,
  },

    });


