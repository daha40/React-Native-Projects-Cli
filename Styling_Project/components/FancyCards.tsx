import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCards() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card , styles.ElevatedCard]}>
        <Image
        source={{
          uri:'https://skyticket.com/guide/wp-content/uploads/2017/10/shutterstock_562330234-e1510103090197.jpg'
        }}
        style={styles.imageCard}
        />

        <View style={styles.cardBody}>
          <Text style={styles.CardTitel}>Republic Boulevard</Text>
          <Text style={styles.CardLapel}> 📍 Algeria Algiers </Text>
          <Text style={styles.CardDescription}>Republic Boulevard in Algiers is a vibrant street filled with history, culture, and lively activity. It's the beating heart of the city, offering a mix of architecture, cultural attractions, shops, and restaurants. A visit to this historic boulevard is a must to experience the essence of Algiers. </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headingText:{
    fontSize: 25,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    marginTop:20,
    },
  card:{
    width:370,
    height:370,
    borderRadius:10,
    marginVertical:12,
    marginHorizontal:21
  },
  ElevatedCard:{
    backgroundColor:'#E5E5E5',
    elevation:1,
    shadowOffset:{
      width:1,
      height:1,
    },
  },
  imageCard:{
    height:180,
    marginBottom:8,
    borderTopLeftRadius:10,
    borderTopRightRadius:10
    
  },
  cardBody:{
    flex:1,
    flexGrow:1,
    paddingHorizontal:10
  },
  CardTitel:{
    color:'#000000',
    fontSize:20,
    fontWeight:'bold',
    marginBottom:5,

  },
  CardLapel:{
    color:'#000000',
    fontSize:17,
    fontWeight:'500',
    marginBottom:10


  },
  CardDescription:{
    color:'#000000',
    fontSize:14,
    fontWeight:'400',
    flexShrink:1

  },
})