import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCardTwo() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card , styles.ElevatedCard]}>
        <Image
        source={{
          uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/The_Test_Garden_Hamma.jpg/1200px-The_Test_Garden_Hamma.jpg'
        }}
        style={styles.imageCard}
        />

        <View style={styles.cardBody}>
          <Text style={styles.CardTitel}>Botanical Garden Hamma</Text>
          <Text style={styles.CardLapel}> 📍 Algeria Algiers </Text>
          <Text style={styles.CardDescription}>Hamma Botanical Garden in Algiers, Algeria, covers 58 hectares, offering a serene escape filled with exotic flora. Established in the 19th century, this lush oasis features palm trees, vibrant flowers, and historical structures, creating a harmonious blend of nature and culture for visitors to enjoy.</Text>
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