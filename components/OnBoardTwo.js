import React, { useState } from 'react'
import { View, Button, Text, StyleSheet, TouchableOpacity, Image, } from 'react-native'
import { AuthContext } from './AuthContext'

const OnBoardTwo = ({ navigation, route }) => {
  const [token, setToken] = useState('')

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white,' }}>
      <Image style={{top: 35}}
        source={require('../assets/G889.jpg')}
      />
      <Image style={{top: -830,}}
        source={require('../assets/threeto.png')}
      />
      <Text  style={{fontSize: 26, fontWeight: 'bold', top: -760, textAlign: 'left', left: -43,}}>Перед тем, как начать...</Text>
      <Text style={{fontSize: 22, fontWeight: 'regular', left: -10, top: -720, textAlign: 'left', }}>Мы можем напоминать вам об этом!{"\n"}
      {"\n"}
      Выберите, в какое время вам будет{"\n"}удобно получать уведомления{"\n"}от приложения:
      </Text>
       <TouchableOpacity onPress={() => navigation.navigate('OnBoardThree')} style={styles.butFirst}>
  <Text style={styles.buttonText}>Продолжить</Text>
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
    top: -310,
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

export default OnBoardTwo
