import React, { useState } from 'react'
import { View, Button, Text, StyleSheet, TouchableOpacity, Image, } from 'react-native'
import { AuthContext } from './AuthContext'

const OnBoardOne = ({ navigation, route }) => {
  const [token, setToken] = useState('')

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white,' }}>
      <Image style={{top: 35}}
        source={require('../assets/G888.jpg')}
      />
      <Image style={{top: -790,}}
        source={require('../assets/threeo.png')}
      />
      <Text  style={{fontSize: 26, fontWeight: 'bold', right: 7, top: -720, textAlign: 'left', left: -43,}}>Перед тем, как начать...</Text>
      <Text style={{fontSize: 22, fontWeight: 'regular', left: 0, top: -680, textAlign: 'left', }}>Наше приложение поможет{"\n"}вам отслеживать то,{"\n"}как вы отдыхаете, 
      и на основе{"\n"}полученной статистики делать свой{"\n"}отдых лучше. 
      {"\n"}
      {"\n"}
      Чтобы статистика была точной, лучше{"\n"}вносить данные ежедневно!
      </Text>
       <TouchableOpacity onPress={() => navigation.navigate('OnBoardTwo')} style={styles.butFirst}>
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
    top: -350,
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

export default OnBoardOne
