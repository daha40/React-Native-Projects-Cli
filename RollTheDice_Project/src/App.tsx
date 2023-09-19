/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Image, ImageSourcePropType, Pressable, StyleSheet, Text, View } from 'react-native';
import type {PropsWithChildren} from 'react';
import ReactNativeHapticFeedback from "react-native-haptic-feedback";
import DiceOne from '../assets/One.png';
import DiceTwo from '../assets/Two.png';
import DiceThree from '../assets/Three.png';
import DiceFour from '../assets/Four.png';
import DiceFive from '../assets/Five.png';
import DiceSix from '../assets/Six.png';


const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType
}>;


const Dice = ({imageUrl}:DiceProps):JSX.Element => {
  return(
    <View>
      <Image style={styles.diceImage} source={imageUrl} />
    </View>
  );
};

function App(): JSX.Element {
  const [diceImage , setdiceImage] = useState<ImageSourcePropType>(DiceOne);

  const rollDiceOneTap = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;

    switch (randomNumber) {
      case 1:
      setdiceImage(DiceOne);
        break;
        case 2:
      setdiceImage(DiceTwo);
        break;
        case 3:
      setdiceImage(DiceThree);
        break;
        case 4:
      setdiceImage(DiceFour);
        break;
        case 5:
      setdiceImage(DiceFive);
        break;
        case 6:
      setdiceImage(DiceSix);
        break;
      default:
        setdiceImage(DiceOne);
        break;
    };
    ReactNativeHapticFeedback.trigger("impactLight", options);
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={rollDiceOneTap}>
      <Dice imageUrl={diceImage}/>
      </Pressable>
      <Text style={styles.rollDiceText}>Tap on the Dice cube</Text>
      <Text style={styles.nameText}>By Abderahmane Kateb</Text>
    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#CFEFFF',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceText: {
    marginTop:10,
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 0.80,
    borderRadius: 8,
    borderColor: '#DAEEF8',
    fontSize: 16,
    color: '#27B8FF',
    fontWeight: '700',
    textTransform: 'uppercase',
    marginBottom:4,
  },
  nameText:{
    fontSize:10,
    color:'#4E4F4F',
    paddingVertical:1,
    
  },
  
});


export default App;