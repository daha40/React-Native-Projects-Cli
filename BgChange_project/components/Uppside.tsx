/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {StatusBar, StyleSheet, Text, TouchableOpacity, View} from 'react-native';


function Uppside(): JSX.Element {
  const [randomBackground, setrandomBackground] = useState('#A9FF89');

  const GenratedColor = () => {
    const hexRange = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)];
    }
    setrandomBackground(color);
  };

  return (
    <>
      <StatusBar backgroundColor={randomBackground} />
      <View style={[styles.continer, {backgroundColor: randomBackground}]}>
        <TouchableOpacity onPress={GenratedColor}>
          <View style={styles.actionbtn}>
            <Text style={styles.actionbtnTxt}>Press Me</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  continer:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    elevation:5,
    shadowOffset:{
      width:1,
      height:1,
    },
    shadowColor:'#000',
  },
  actionbtn:{
    backgroundColor:'#0081AC',
    borderRadius:60,
    paddingHorizontal:15,
    paddingVertical:15,
    elevation:5,
    shadowOffset:{
      width:1,
      height:1,
    },
    shadowColor:'#000',
  },
  actionbtnTxt:{
    fontSize:24,
    fontWeight:'500',
    color:'#fff',
    textTransform:"uppercase",
  },
});

export default Uppside;
