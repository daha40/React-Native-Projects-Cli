/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {FlatList, Pressable,StatusBar,StyleSheet,Text,TextInput,View,} from 'react-native';

//Constants
import {currencyByDinarsDz} from './constants';
//component
import CurrencyButton from '../components/CurrencyButton';
//Snackbar
import Snackbar from 'react-native-snackbar';

function App(): JSX.Element {
  const [inputValue, setInputValue] = useState('');
  const [resultValue, setResultValue] = useState('');
  const [targetCurrency, setTargetCurrency] = useState('');

  const buttonPressed = (targetValue:Currency)=>{
    if (!inputValue) {
      return Snackbar.show({
        text:"Enter a value to convert",
        backgroundColor:"#7A7A7A",
        textColor:"#FFFFFF",
      })
      
    }

    const inputAmount = parseFloat(inputValue) 
    if (!isNaN(inputAmount)) {
      const convertedValue = inputAmount * targetValue.value
      const result = `${targetValue.symbol} ${convertedValue.toFixed(2)}`
      setResultValue(result);
      setTargetCurrency(targetValue.name);
    } else {
      return Snackbar.show({
        text:"not a valid number to convert",
        backgroundColor:"#7A7A7A",
        textColor:"##FFFFFF",
      })
    }
  }

  return (
    <>
      <StatusBar />
        <View style={styles.container}>
          <View style={styles.topContainer}>
            <View style={styles.DzdContainer}>
              <Text style={styles.Dzd}>دج 🇩🇿</Text>
              <TextInput
              maxLength={14}
              value={inputValue}
              clearButtonMode='always' // this is just for ios device
              onChangeText={setInputValue}
              keyboardType='number-pad'
              placeholder='Enter Amount In Dzd'
              placeholderTextColor='#666666'
              style={styles.inputAmountField}
              />
            </View>
            {resultValue && (
              <Text style={styles.resultTxt}>{resultValue}</Text>
            )}
          </View>
          <View style={styles.bottomContainer}>
              <FlatList
              numColumns={3}
              data={currencyByDinarsDz}
              keyExtractor={item => item.name}
              renderItem={({item}) => (
                <Pressable style={[styles.button, targetCurrency === item.name && styles.selected ]} 
                  onPress={() => buttonPressed(item)}>
                  <CurrencyButton {...item}/>
                </Pressable>
              )}
              />
          </View>
        </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D7E9EA',
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  resultTxt: {
    fontSize: 32,
    color: '#000000',
    fontWeight: '800',
  },
  Dzd: {
    marginRight: 8,

    fontSize: 22,
    color: '#000000',
    fontWeight: '800',
  },
  DzdContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputAmountField: {
    height: 50,
    width: 150,
    padding: 8,
    borderWidth:0.30,
    borderRadius: 3,
    borderColor:'#505050',
    backgroundColor:'#ffffff',
    elevation: 1,
  },
  bottomContainer: {
    flex: 3,
  },
  button: {
    flex: 1,

    margin: 12,
    height: 60,

    borderRadius: 10,
    backgroundColor: '#fff',
    elevation: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  selected: {
    backgroundColor: '#C3FAFD',
  },
});

export default App;
