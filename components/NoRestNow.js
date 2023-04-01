import React, { useState } from 'react'
import { View, Button, Text, TouchableOpacity, StyleSheet, Image, } from 'react-native'
import Form from './Form';
import { Formik } from 'formik';
// import { Rest } from './components/AuthContext';

const NoRestNow = ({ }) => {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{fontSize: 128, fontWeight: 'bold', top: 0, color: '#424953'}}>0%</Text>
        <Image style={styles.miniPic}
        source={require('../assets/mini.png')}
      />
      <Text style={{fontSize: 16, fontWeight: 600, top: -380}}>Сегодня</Text>
      <Text style={{fontSize: 16, fontWeight: 'regular', top: -377}}>1 апреля, Суббота</Text>

      <Text style={{fontSize: 26, fontWeight: 'regular', top: 0, color: '#000000', top: -65}}>Эффективность вашего отдыха</Text>

      <Image style={{top: -35,}}
        source={require('../assets/gr.png')}
      />
            <Text style={{fontSize: 18, fontWeight: 'regular', top: 0, color: '#000000', top: -15,}}>Данные за сегодня не внесены</Text>

   <TouchableOpacity  onPress={() => navigation.navigate('Zapis')} style={styles.butFirst}>
  <Text style={styles.buttonText}>Добавить запись</Text>
</TouchableOpacity>
<TouchableOpacity onPress={() => navigation.navigate('NoRestNow')} style={styles.buеtFirst}>
  <Text style={styles.buttonTextе}>Пока без отдыха</Text>
</TouchableOpacity>
    </View>
  )
}  

const styles = StyleSheet.create({
   
    butFirst: {
      backgroundColor: "#E07513",
      padding: 16,
      borderRadius: 22,
      width: 290,
      left: 0,
      top: 150,
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
    top: 20,
    padding: 12,
    width: 290,
    left: 0,
    top: 165,
      },
      buttonTextе: {
        textAlign: 'center',
        color: "#E07513",
        fontSize: 22,
      },
      miniPic: {
        top: -345,
        left: 170,
      } 
  });
  

export default NoRestNow
