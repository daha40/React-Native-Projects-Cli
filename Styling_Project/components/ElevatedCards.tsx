import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card , styles.ElevatedCard]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card , styles.ElevatedCard]}>
          <Text>On</Text>
        </View>
        <View style={[styles.card , styles.ElevatedCard]}>
          <Text>Me</Text>
        </View>
        <View style={[styles.card , styles.ElevatedCard]}>
          <Text>To</Text>
        </View>
        <View style={[styles.card , styles.ElevatedCard]}>
          <Text>Scroll</Text>
        </View>
        <View style={[styles.card , styles.ElevatedCard]}>
          <Text>More....</Text>
        </View>
        <View style={[styles.card , styles.ElevatedCard]}>
          <Text>More....</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    marginTop:20,

  },
  container:{
    flex: 1,
    flexDirection: 'row',
    padding:8,
    marginVertical:3
  },
  card:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100,
    borderRadius: 4,
    margin: 8,

  },

  ElevatedCard:{
    backgroundColor:'#C3BEB4',
    elevation:4,
    shadowOffset:{
      width:1,
      height:1,
    },
    shadowColor:'#FFFFFF',
    shadowOpacity:0.2,
    shadowRadius:2,

  },
});
