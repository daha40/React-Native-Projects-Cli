/* eslint-disable prettier/prettier */
import React from 'react';
import type { PropsWithChildren } from 'react';
import { StyleSheet, View, Text } from 'react-native';

type CurrencyButtonProps = PropsWithChildren<{
  name:String;
  flag:string;

}>

const CurrencyButton = (props:CurrencyButtonProps):JSX.Element =>{
  return(

    <View style={styles.buttonContiner}>
      <Text style={styles.flag}>{props.flag}</Text>
      <Text style={styles.country}>{props.name}</Text>
    </View>
    );
};


const styles = StyleSheet.create({
  buttonContiner:{
    alignItems:'center',

  },
  flag:{
    fontSize:28,
    color:'#ffffff',
    marginBottom:4,
  },
  country:{
    fontSize:14,
    color:'#000000',
    fontWeight:'400',
    
  },
});

export default CurrencyButton;