import * as React from 'react'
import { AsyncStorage } from '@react-native-async-storage/async-storage'
import { SafeAreaView, Text, View, TextInput, Button, StyleSheet, TouchableOpacity, Image, } from 'react-native'
import { apiUrl } from './const'


const SignInScreen = ({ navigation, route }) => {
    const [login, onChangeLogin] = React.useState('user1')
    const [password, onChangePassword] = React.useState('password1')
    const [token, setToken] = React.useState('')
    const [userId, setUserId] = React.useState(0)
    const [userName, setUserName] = React.useState('')


    function saveData() {
        _storeData = async () => {
            try {
                await AsyncStorage.setItem('token', token);
            } catch (error) {
                console.log(error) // Error saving data
            }
        }
    }


    function signIn() { doSignIn() }
    
    function signOut() { 
        setToken('')
        setUserId(0)
        setUserName('')
        saveData()
        alert('You are successfully sign out')
    }
    
    const doSignIn = async() => {
        try {
            const response = await fetch( 'http://localhost:3000/api/v1/userrs')
          
            let json = await response.json() // получаем тело ответа

            if (typeof json['token'] !== 'undefined') {
                setUserId(json.id)
                setUserName(json.login)
                setToken(json.token)
                saveData()
                alert('You are successfully logged in as a user "' +
                      json.login +'"')
            } else if (typeof json['message'] !== 'undefined') {
                alert(json.message)
                navigation.navigate('Main')
            } else console.log(json)
        } catch (error) {
            alert(error)
        } finally {
        }
    }


    return (
        <SafeAreaView style={{backgroundColor: 'white',}}>
             
            <Text style={{fontSize: 24, fontWeight: '600', top: 47, left: 10,}}>Введите данные аккаунта</Text>
            <TextInput
                style={styles.input1}
                onChangeText={onChangeLogin}
                value={login}
                placeholder="Email"
            />
            <TextInput
                style={styles.input2}
                onChangeText={onChangePassword}
                value={password}
                placeholder="Пароль"
            />
            
             <TouchableOpacity   onPress={token === '' ? signIn : signOut } style={styles.butFirst} title={token === '' ? 'Sign In' : 'Sign out'} accessibilityLabel="Learn more">
  <Text style={styles.buttonText}>Войти</Text>
</TouchableOpacity>
            {/* <Button
                onPress={token === '' ? signIn : signOut }
                title={token === '' ? 'Sign In' : 'Sign out'}
                color="#841584"
                accessibilityLabel="Learn more"
            /> */}
            <Image style={styles.iliPic}
        source={require('../assets/ili.png')}
      />
 <Text style={{fontSize: 17, fontWeight: 'regular', top: 177, left:60,}}>Авторизуйтесь через социальные сети</Text>
 <Image style={styles.icPic}
        source={require('../assets/ic.png')}
      />
      <Image style={styles.icPic}
        source={require('../assets/wh.jpg')}
      />
            <View style={styles.text}>
                <Text> {token === '' ? '' : 'Token: ' + token} </Text>
                <Text> {userId === 0 ? '' : 'User id: ' + userId} </Text>
                <Text> {userName === '' ? '' : 'User name: ' + userName} </Text>
            </View>
        </SafeAreaView>
    )
}

export default SignInScreen

const styles = StyleSheet.create({
    input1: {
        height: 60,
        margin: 12,
        borderRadius: 5,
        padding: 10,
        width: '94%',
        backgroundColor: '#E3E5EB',
        top: 60,
    },
    input2: {
        height: 60,
        margin: 12,
        borderRadius: 5,
        padding: 10,
        width: '94%',
        backgroundColor: '#E3E5EB',
        top: 62,
    },
    text: {
        margin: 12
    },
    butFirst: {
        backgroundColor: "#E07513",
        padding: 16,
        borderRadius: 22,
        width: 290,
        left: 75,
        top: 130,
      },
      buttonText: {
        textAlign: 'center',
        color: "white",
        fontSize: 22,
      },
      iliPic: {
        top: 147,
        left: 40,
      },
      iPic: {
        top: 250,
      },
      icPic: {
        top: 197,
        left: 100,
      },
})
