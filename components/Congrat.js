import React, { useState } from 'react'
import { View, Button, Text, StyleSheet, TouchableOpacity, Image, } from 'react-native'
import { AuthContext } from './AuthContext'

const Congrat = ({ navigation, route }) => {
  const [token, setToken] = useState('')

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <Image style={styles.mainPic}
        source={require('../assets/Fram.png')}
      />
      <Text  style={{fontSize: 36, fontWeight: 'bold', right: 60, top: -85, textAlign: 'left'}}>Поздравляем!</Text>
      <Text  style={{fontSize: 26, fontWeight: 'bold', right: 7, top: -60, textAlign: 'left'}}>Только что вы создали себе профиль!</Text>
      <Text style={{fontSize: 22, fontWeight: 'regular', right: -10, top: -20, textAlign: 'left', }}>Теперь вы можете начать вести свой {"\n"}
       дневник отдыха, отслеживать{"\n"}статистику и улучшать качество своего{"\n"}отдыха!  </Text>
      {/* <Button
        title="Заре"
        onPress={() => navigation.navigate('SignUp')}
      />
      <Button
        title="Sign In"
        onPress={() => navigation.navigate('SignIn')}
      /> */}
       <TouchableOpacity onPress={() => navigation.navigate('OnBoardOne')} style={styles.butFirst}>
  <Text style={styles.buttonText}>Вперёд!</Text>
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
    top: 45,
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

export default Congrat
