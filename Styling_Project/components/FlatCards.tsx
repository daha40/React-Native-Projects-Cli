import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOrange]}>
          <Text>Orange</Text>
        </View>
        <View style={[styles.card, styles.cardGreen]}>
          <Text>Green</Text>
        </View>
        <View style={[styles.card, styles.cardBlue]}>
          <Text>Blue</Text>
        </View>
        <View style={[styles.card, styles.cardgray]}>
          <Text>Gray</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headingText: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    marginTop:20,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100,
    borderRadius: 5,
    margin: 10,
  },
  cardOrange: {
    backgroundColor: '#FF5733',
  },
  cardGreen: {
    backgroundColor: '#17A778',
  },
  cardBlue: {
    backgroundColor: '#1D839A',
  },
  cardgray: {
    backgroundColor: '#7A7A7A',
  },
  
});
