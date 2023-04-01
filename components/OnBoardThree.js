import React, { useState } from 'react'
import { View, Button, Text, StyleSheet, TouchableOpacity, Image, } from 'react-native'
import { AuthContext } from './AuthContext'

const OnBoardThree = ({ navigation, route }) => {
  const [token, setToken] = useState('')

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white,' }}>
      <Image style={{top: 35}}
        source={require('../assets/G888.jpg')}
      />
      <Image style={{top: -765,}}
        source={require('../assets/threethro.png')}
      />
      <Text  style={{fontSize: 26, fontWeight: 'bold', right: 7, top: -693, textAlign: 'left', left: -43,}}>Перед тем, как начать...</Text>
      <Text style={{fontSize: 22, fontWeight: 'regular', left: -14, top: -653, textAlign: 'left', }}>
      За каждую сделанную запись{"\n"}вы продвигаетесь по рейтингу,{"\n"}а также приближаетесь к открытию{"\n"}новых рун-достижений.
      {"\n"}
      {"\n"}
      Качество и время отдыха не влияет{"\n"}на награды — главное, стараться{"\n"}отдыхать хотя бы раз в день!
      {"\n"}
      {"\n"}
      Мы верим, у вас получится!
      </Text>
       <TouchableOpacity onPress={() => navigation.navigate('Main')} style={styles.butFirst}>
  <Text style={styles.buttonText}>Создать запись!</Text>
</TouchableOpacity>
      <Text> {token === '' ? '' : 'Token: ' + token} </Text>
    </View>
  )
}  

const styles = StyleSheet.create({
  butFirst: {
    backgroundColor: "#E07513",
    padding: 12,
    borderRadius: 27,
    width: 290,
    top: -376,
  },
  buttonText: {
    textAlign: 'center',
    color: "white",
    fontSize: 22,
  },
  mainPic: {
    top: -161,
    padding: 0,
    margin: 0,
    zIndex: 0,
    width: 430,
  },
  iliPic: {
    top: 27,
  }
})

export default OnBoardThree
