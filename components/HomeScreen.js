import React, { useState } from 'react'
import { View, Button, Text, StyleSheet, TouchableOpacity, Image, } from 'react-native'
import { AuthContext } from './AuthContext'

const HomeScreen = ({ navigation, route }) => {
  const [token, setToken] = useState('')

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <Image style={styles.mainPic}
        source={require('../assets/Fram.png')}
      />
      <Text  style={{fontSize: 36, fontWeight: 'bold', right: 20, top: -135, textAlign: 'left'}}>Добро пожаловать!</Text>
      <Text  style={{fontSize: 26, fontWeight: 'bold', right: 0, top: -105, textAlign: 'left'}}>Надеюсь вы готовы отдыхать!</Text>
      <Text style={{fontSize: 22, fontWeight: 'regular', right: 3, top: -55, textAlign: 'left', }}>Но перед этим войдите в систему, {"\n"}
       чтобы иметь возможность сохранять прогресс.</Text>
      {/* <Button
        title="Заре"
        onPress={() => navigation.navigate('SignUp')}
      />
      <Button
        title="Sign In"
        onPress={() => navigation.navigate('SignIn')}
      /> */}
       <TouchableOpacity onPress={() => navigation.navigate('SignUp')} style={styles.butFirst}>
  <Text style={styles.buttonText}>Зарегистрироваться</Text>
</TouchableOpacity>
<Image style={styles.iliPic}
        source={require('../assets/ili.png')}
      />
<TouchableOpacity  onPress={() => navigation.navigate('SignIn')} style={styles.buеtFirst}>
  <Text style={styles.buttonTextе}>Войти в аккаунт</Text>
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
   
  },
  buttonText: {
    textAlign: 'center',
    color: "white",
    fontSize: 22,
  },
  buеtFirst: {
    borderColor: "#E07513",
    color: 'white',
    borderWidth:  3,
    borderRadius: 27,
    top: 60,
    padding: 12,
    width: 290,
  },
  buttonTextе: {
    textAlign: 'center',
    color: "#E07513",
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

export default HomeScreen
