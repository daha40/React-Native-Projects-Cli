/* eslint-disable prettier/prettier */
import { StyleSheet, View } from 'react-native'
import React from 'react'

const separator = () => {
  return (
    <View style={styles.separator}>
    </View>
  )
}


const styles = StyleSheet.create({
  separator:{
    height:0.8,
    backgroundColor:'#A7FD9D'
  }
})

export default separator

