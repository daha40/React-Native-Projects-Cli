import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ProfileCard() {
  return (
    <View>
      <Text style={styles.headingText}>ProfileCard</Text>
      <View style={styles.card}>
        <Image
        source={{
          uri:''
        }}
        style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.CardInfo}> Abderahmane Kateb</Text>
          <Text style={styles.CardInfo}>📍 Algeria Khenchela </Text>
          <Text style={styles.CardInfo}> Software Developer</Text>
          <Text style={styles.CardDescription}>Aka Daha, a 22-years-old Software Developer and Video Editor, embodies innovation and learning enthusiasm. With a flair for coding and a creative touch, they blend technology and artistry to create captivating digital experiences.</Text>
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
    height:470,
    backgroundColor:'#009FE8',
    marginHorizontal:22,
    marginVertical:10,
    borderRadius:8,
    elevation:5,
    shadowOffset:{
      width:1,
      height:1,
    },
  },
  cardImage:{
    height:250,
    width:370,
    borderTopLeftRadius:8,
    borderTopRightRadius:8,
  },
  cardBody:{
    flex:1,
    flexGrow:1,
    paddingHorizontal:10,
    padding:8,
    paddingVertical:10,
  },
  CardInfo:{
    fontSize:16,
    fontWeight:'500',
    padding:2,
    color:'#fff'
  },
  CardDescription:{
    fontSize:16,
    marginTop:15,
    color:'#fff',
    fontWeight:'400',
    padding:2,
  },
})