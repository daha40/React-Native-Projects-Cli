import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContectList() {
    const contacts =[
      {
        uid:1,
        name:'Abderahmane Kateb',
        status: 'Software Developer',
        imageUrl:'https://avatars.githubusercontent.com/u/64675525?v=4',
      },
      {
        uid:2,
        name:'Abderahmane Kateb',
        status: 'Software Developer',
        imageUrl:'https://fiverr-res.cloudinary.com/image/upload/t_profile_original,q_auto,f_auto/v1/attachments/profile/photo/8646567140bbfb813d7f4ca680216b14-1691616005743/339fcfc5-6463-426a-a38b-a781fe81fd60.jpg',
      },
      {
        uid:3,
        name:'Abderahmane Kateb',
        status: 'Software Developer',
        imageUrl:'',
      },
      {
        uid:4,
        name:'Abderahmane Kateb',
        status: 'Software Developer ',
        imageUrl:'',
      },
    ];
  return (
    <View>
      <Text style={styles.headingText}>ContectList</Text>
      <ScrollView style={styles.continer}scrollEnabled={false}>
          {contacts.map(({uid, name, status, imageUrl})=>(
            <View key={uid} style={styles.userCard} >
                <Image
                source={{
                  uri:imageUrl
                }}
                style={styles.userImage}
                />
                <View>
                  <Text style={styles.userName}>{name}</Text>
                  <Text style={styles.userStatus}>{status}</Text>
                </View>
            </View>
          ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  
  headingText:{
    fontSize: 25,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    marginBottom:5,
    marginTop:20,
  },
  continer:{
    paddingHorizontal:20
  },
  userCard:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'#28C9FF',
    padding: 8,
    borderRadius:12,
    margin: 4,
    elevation:4,


  },
  userImage:{
    width:60,
    height:60,
    borderRadius:60 / 2,
    marginRight:15,
  },
  userName:{
    fontSize:16,
    fontWeight:'600',
    color:'#fff'
  },
  userStatus:{
    fontSize:12,
    color:'#fff',
    fontWeight:'400'
  },

})