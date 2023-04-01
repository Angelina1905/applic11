import * as React from 'react'
import { useState } from 'react'
import { SafeAreaView, TextInput, Button, View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { apiUrl } from './const'

const SignUpScreen = ({ navigation, route }) => {
    const [login, onChangeLogin] = React.useState('')
    const [password1, onChangePassword1] = React.useState('')
    const [password2, onChangePassword2] = React.useState('')
    const [email, onChangeEmail] = React.useState('')

    const emptyUser = {
        id: 0,
        login: '',
        password: '',
        email: '',
        token: ''
    }
    const [user, setUser] = useState(emptyUser)


    function signUp() {
        signOut()
        doSignUp()
    }
    
    function signOut() {
        setUser(emptyUser)
    }

    const doSignUp = async () => {
        try {
            const response = await fetch( 'http://localhost:3000/api/v1/userrs')
            //     apiUrl + "/auth/signup",
            //     {
            //         method:'POST',
            //         headers:{
            //             'Accept': 'application/json',
            //             'Content-Type': 'application/json'
            //         },
            //         body: JSON.stringify({'login': login, 'password': password1, 'email': email})
            //     }
            // )
            const json = await response.json()

            if (typeof json['token'] !== 'undefined') {
                setUser(json)

                alert('You are successfully signed up as a user "' +
                      json.login +'"')
            } else if (typeof json['message'] !== 'undefined') {
                alert(json.message)
                navigation.navigate('Congrat')
            } else console.log(json)
        } catch (error) {
            console.error(error)
        } finally {}
    }

    return (
        <SafeAreaView style={{backgroundColor: 'white'}}>
            <Text style={{fontSize: 24, fontWeight: '600', top: 47, left: 10,}}>Придумайте себе ник</Text>
            <TextInput
                style={styles.input1}
                onChangeText={onChangeLogin}
                value={login}
                placeholder="Имя"
            />
                 <Text style={{fontSize: 24, fontWeight: '600', top: 111, left: 10,}}>Создайте пароль</Text>
            <TextInput
                style={styles.input2}
                onChangeText={onChangePassword1}
                value={password1}
                placeholder="Пароль"
            />
            <TextInput
                style={styles.input3}
                onChangeText={onChangePassword2}
                value={password2}
                placeholder="Подтверждение пароля"
            />
            <Text style={{fontSize: 24, fontWeight: '600', top: 181, left: 10,}}>И закрепите email'ом</Text>
            <TextInput
                style={styles.input4}
                onChangeText={onChangeEmail}
                value={email}
                placeholder="Email"
            />
             <TouchableOpacity    onPress={signUp} style={styles.butFirst} accessibilityLabel="Learn more">
  <Text style={styles.buttonText}>Создать аккаунт</Text>
</TouchableOpacity>
            {/* <Button
                onPress={signUp}
                title="Создать аккаунт"
                color="#E07513"
                accessibilityLabel="Learn more"
                style={styles.bbuutt}
            /> */}
            <View style={styles.text}>
                <Text> {user.token === '' ? '' : 'Token: ' + user.token} </Text>
                <Text> {user.id === 0 ? '' : 'User id: ' + user.id} </Text>
                <Text> {user.login === '' ? '' : 'User name: ' + user.login} </Text>
                <Text> {user.password === '' ? '' : 'User password: ' + user.password} </Text>
                <Text> {user.email === '' ? '' : 'User email: ' + user.email} </Text>
            </View>
        </SafeAreaView>
    )
}

export default SignUpScreen

const styles = StyleSheet.create({
    input1: {
        height: 60,
        margin: 12,
        borderRadius: 5,
        padding: 10,
        width: '94%',
        backgroundColor: '#E3E5EB',
        top: 55,
    },
    input2: {
        height: 60,
        margin: 12,
        borderRadius: 5,
        padding: 10,
        width: '94%',
        backgroundColor: '#E3E5EB',
        top: 115,
    },
    input3: {
        height: 60,
        margin: 12,
        borderRadius: 5,
        padding: 10,
        width: '94%',
        backgroundColor: '#E3E5EB',
        top: 110,
    },
    input4: {
        height: 60,
        margin: 12,
        borderRadius: 5,
        padding: 10,
        width: '94%',
        backgroundColor: '#E3E5EB',
        top: 185,
    },
    text: {
        margin: 12,
        color: '#6E6E6E',
    },
    bbuutt: {
       top: 100,
    },
    butFirst: {
        backgroundColor: "#E07513",
        padding: 12,
        borderRadius: 27,
        width: 290,
        left: 75,
        top: 245,
      },
      buttonText: {
        textAlign: 'center',
        color: "white",
        fontSize: 22,
      },
})
