/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

//navigation 
import {RootStackParamList} from '../App'
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import {useNavigation} from '@react-navigation/native'
import {NativeStackNavigationProp} from '@react-navigation/native-stack'


type DetailsProps = NativeStackScreenProps<RootStackParamList, 'Details'>

const Details = ({route} :DetailsProps ) => {

  const {productId} = route.params

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  
  return (
    <View style={styles.container}>
      <Text style={styles.smallText}>Details : {productId}</Text>
      <Button 
      title='go to home'
      onPress={() => navigation.navigate('Home') }
      />
    </View>
  )
}

export default Details

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:'#E5D9BD'
},
  smallText: {
    color: "#000000",
    fontSize:25,
    marginBottom:5,
}

})