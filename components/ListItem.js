import React, { useState, useContext } from 'react';
import { View, Button, TouchableHighlight, Text, StyleSheet,  } from 'react-native';




export default function ListItem ({el}){

  return (
    <View  >
    <TouchableHighlight>
         <Text style={styles.text}> {el.text} </Text>
    </TouchableHighlight>
    </View>
  )
}  

const styles = StyleSheet.create({
text: {
    fontSize: 25,
    top: 0,
}
});


