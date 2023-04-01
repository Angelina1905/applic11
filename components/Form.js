// import React, { useState } from 'react'
// import { View, Button, Text, StyleSheet, TextInput } from 'react-native';
// import { Formik } from 'formik';


// const Form = ({ addRest }) => {


//   return (
//     <View>
// <Formik initialValues={{time:'', activity: '', details: '', emotions: '', feelings: ''}} onSubmit={(values, clean) => {
//   addRest(values);
// clean.resetForm();
// } }>
// {(props) => (
//     <View>
//         <TextInput value={props.values.time} 
//             placeholder='Сколько времени вы отдыхали' 
//             onChangeText={props.handleChange('time')} />
//         <TextInput value={props.values.activity} 
//             placeholder='Что вы делали' 
//             onChangeText={props.handleChange('activity')} />
//          <TextInput value={props.values.details} 
//          multiline
//         placeholder='Запишите впечатления и детали' 
//         onChangeText={props.handleChange('details')} />
//         <TextInput value={props.values.emotions} 
//         placeholder='Как ваше настроение после отдыха' 
//         onChangeText={props.handleChange('emotions')} />
//           <TextInput value={props.values.feelings} 
//         placeholder='Как вы себя чувствуете после отдыха' 
//         onChangeText={props.handleChange('feelings')} />
//         <Button title='Готово' onPress={props.handleSubmit}  />
//    </View>
// )} 
// </Formik>
//     </View>
//   )
// }  

// export default Form


import React, { useState } from 'react'
import { View, Button, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';


export default function Form ({addHandler}) {
  const [text, setValue] = useState('');
  const onchange = (text) => {
      setValue(text);
  };


  return (
    <View>
<TextInput style={styles.input} onChangeText={onchange} placeholder='Сколько времени вы отдыхали? И что вы делали?' ></TextInput>
<TouchableOpacity  onPress={() => addHandler(text)} style={styles.butFirst}>
  <Text style={styles.buttonText}>Добавить отдых</Text>
</TouchableOpacity>
{/* <Button onPress={() => addHandler(text)} title='Добавить отдых' /> */}
   </View>

  )
}  

const styles = StyleSheet.create ({
    input: {
      borderBottomWidth: 1,
      borderColor: '#000',
      padding: 10, 
      marginVertical: 30,
      fontSize: 17,
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

