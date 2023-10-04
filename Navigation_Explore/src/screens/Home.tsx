/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
//navigation 
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import {RootStackParamList} from '../App'


type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>

const Home = ({navigation}:HomeProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.smallText}>Home</Text>
      <Button 
      title="go to details"
      onPress={() => navigation.navigate('Details' ,{productId:'40'})}
      />
      <View>
        <Text style={styles.TxtBy}>By Abderahmane Kateb Exploring React Native Navigation</Text>
      </View>
    </View>
  )
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor:'#A8C7CB'
  },
  smallText: {
      color: "#000000",
      fontSize:25,
      marginBottom:5,
  },
  TxtBy:{
    fontSize:12,
    fontWeight:'500',
    marginTop:10,
  }
})



export default Home