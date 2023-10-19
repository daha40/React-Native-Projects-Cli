/* eslint-disable prettier/prettier */
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#464646" />
      <Text>Loading</Text>
    </View>
  )
}



const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  }
})

export default Loading
