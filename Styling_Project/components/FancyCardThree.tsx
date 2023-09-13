import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCardThree() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card , styles.ElevatedCard]}>
        <Image
        source={{
          uri:'https://mediaim.expedia.com/destination/2/a1e165910f1d99f3415a7a5dea97c034.jpg'
        }}
        style={styles.imageCard}
        />

        <View style={styles.cardBody}>
          <Text style={styles.CardTitel}>Constantine, the City of Suspension Bridges</Text>
          <Text style={styles.CardLapel}> 📍 Algeria Constantine </Text>
          <Text style={styles.CardDescription}>Constantine, perched in northeastern Algeria, is a city of dramatic beauty. Its ancient and modern districts cling to steep cliffs, divided by the Rhumel River, with breathtaking suspension bridges connecting its vibrant neighborhoods.</Text>
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