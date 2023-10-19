/* eslint-disable prettier/prettier */
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
//Screen
import Home from '../screens/Home'

export type AppStackParamList = {
  Home: undefined;
} 

const Stack = createNativeStackNavigator<AppStackParamList>()

export const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerTitleAlign:'center',
      headerBackTitleVisible:false,
    }}>
      <Stack.Screen name= "Home" component={Home}/>
    </Stack.Navigator>
  )
}



