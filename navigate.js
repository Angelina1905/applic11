import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "./components/HomeScreen";
import SignInScreen from "./components/SignInScreen";
import SignUpScreen from "./components/SignUpScreen";
import Main from "./components/Main";
import Zapis from "./components/Zapis";
import Dostiz from "./components/Dostiz";
import Reiting from "./components/Reiting";
import Statistika from "./components/Statistika";
import Profile from "./components/Profile";
import NoRestNow from "./components/NoRestNow";
import Congrat from "./components/Congrat";
import OnBoardOne from "./components/OnBoardOne";
import OnBoardTwo from "./components/OnBoardTwo";
import OnBoardThree from "./components/OnBoardThree";



  
export default function Navigate() {
    const Stack = createStackNavigator();
    const Tab = createBottomTabNavigator();
    
    

    const TabStack = () => {
        return (
        <Tab.Navigator>
           <Tab.Screen name="Main"component={Main} 
           options={{
            headerStyle: { backgroundColor:'transparent', height: 0},
            headerTitleStyle: { color: 'transparent'}
           }} />
          <Tab.Screen name="Достижения" component={Dostiz} />
          <Tab.Screen name="Рейтинг" component={Reiting} />
          <Tab.Screen name="Статистика" component={Statistika} />
          <Tab.Screen name="Профиль" component={Profile} />
         </Tab.Navigator>
        )
    }
    
return <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen}options={{
            headerStyle: { backgroundColor:'transparent', height: 0},
            headerTitleStyle: { color: 'transparent'}}}/>
        <Stack.Screen name="SignIn" component={SignInScreen} options= {{
            title: 'Авторизация',
        }} />
        <Stack.Screen name="SignUp" component={SignUpScreen} options= {{
            title: 'Регистрация',}} />
         <Stack.Screen     
         name="Main"
         component={Main}
         options={{
            title: 'Главная',
            headerStyle: { backgroundColor:'transparent', height: 0},
            headerTitleStyle: { color: 'transparent'}
        }} />
             <Stack.Screen     
         name="Congrat"
         component={Congrat}
         options={{
            title: 'Главная',
            headerStyle: { backgroundColor:'transparent', height: 0},
            headerTitleStyle: { color: 'transparent'}
        }} />
            <Stack.Screen     
         name="OnBoardOne"
         component={OnBoardOne}
         options={{
            title: 'О приложении',
            // headerStyle: { backgroundColor:'white', height: 0},
            // headerTitleStyle: { color: 'black'}
        }} />
            <Stack.Screen     
         name="OnBoardTwo"
         component={OnBoardTwo}
         options={{
            title: 'О приложении',
            // headerStyle: { backgroundColor:'white', height: 0},
            // headerTitleStyle: { color: 'black'}
        }} />
              <Stack.Screen     
         name="OnBoardThree"
         component={OnBoardThree}
         options={{
            title: 'О приложении',
            // headerStyle: { backgroundColor:'white', height: 0},
            // headerTitleStyle: { color: 'black'}
        }} />
         <Stack.Screen     
         name="NoRestNow"
         component={NoRestNow}
         options={{
            title: 'Главная',
            headerStyle: { backgroundColor:'transparent', height: 0},
            headerTitleStyle: { color: 'transparent'}
        }} />
         <Stack.Screen     
         name="Profile"
         component={Profile}
         options={{
            title: 'Главная',
            headerStyle: { backgroundColor:'transparent', height: 0},
            headerTitleStyle: { color: 'transparent'}
        }} />
        <Stack.Screen name="Tab" component={TabStack} 
        options={{
            headerStyle: { backgroundColor:'transparent', height: 0},
            headerTitleStyle: { color: 'transparent'}
        }} />
  <Stack.Screen     
         name="Zapis"
         component={Zapis}
         options={{title: 'Запись отдыха'}} />
    </Stack.Navigator>
</NavigationContainer>

}



// import React from "react";
// import { createStackNavigator } from "@react-navigation/stack";
// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import HomeScreen from "./components/HomeScreen";
// import SignInScreen from "./components/SignInScreen";
// import SignUpScreen from "./components/SignUpScreen";
// import Main from "./components/Main";
// import Zapis from "./components/Zapis";
// import Dostiz from "./components/Dostiz";
// import Reiting from "./components/Reiting";
// import Statistika from "./components/Statistika";
// import Profile from "./components/Profile";
  
// export default function Navigate() {
//     const Stack = createStackNavigator();
//     const Tab = createBottomTabNavigator();

//     const TabStack = () => {
//         return (
//             <Tab.Navigator>
//                 <Tab.Screen name="Main"component={Main} 
//                     options={{
//                         headerStyle: { backgroundColor:'transparent', height: 0},
//                         headerTitleStyle: { color: 'transparent'}
//                     }
//                 } />

//                 <Tab.Screen name="Достижения" component={Dostiz} />
//                 <Tab.Screen name="Рейтинг" component={Reiting} />
//                 <Tab.Screen name="Статистика" component={Statistika} />
//                 <Tab.Screen name="Профиль" component={Profile} />
//             </Tab.Navigator>
//         )
//     }
    
//     return (<NavigationContainer>
//         <Stack.Navigator>
//         <Stack.Screen name="Tab" component={TabStack} 
//                 options={{
//                     headerStyle: { backgroundColor:'transparent', height: 0},
//                     headerTitleStyle: { color: 'transparent'}
//                 }
//             } />
//         <Stack.Screen name="Home" component={HomeScreen}/>
//             <Stack.Screen name="SignIn" component={SignInScreen} />
//             <Stack.Screen name="SignUp" component={SignUpScreen} />
            

//             <Stack.Screen name="Main" component={Main}
//                 options={{
//                     title: 'Главная',
//                     headerStyle: { backgroundColor:'transparent', height: 0},
//                     headerTitleStyle: { color: 'transparent'}
//                 }
//             } />
        

//             <Stack.Screen name="Profile" component={Profile}
//                 options={{
//                     title: 'Главная',
//                     headerStyle: { backgroundColor:'transparent', height: 0},
//                     headerTitleStyle: { color: 'transparent'}
//                 }
//             } />

//             <Stack.Screen name="Zapis" component={Zapis}
//                 options={{title: 'Запись отдыха'}}
//             />
    
//         </Stack.Navigator>
//     </NavigationContainer>)
// }