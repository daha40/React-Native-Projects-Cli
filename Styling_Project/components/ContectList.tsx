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
        imageUrl:'https://scontent.fblj1-1.fna.fbcdn.net/v/t39.30808-6/347422988_108549352295312_5357440609621002752_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=1b51e3&_nc_ohc=s7gYvgw0D4gAX-yW55y&_nc_ht=scontent.fblj1-1.fna&oh=00_AfCw3SS0y7Guz_EIZKKG150nddXBlfIAbrS5_QY-hcWukQ&oe=650366BD',
      },
      {
        uid:3,
        name:'Abderahmane Kateb',
        status: 'Software Developer',
        imageUrl:'https://fiverr-res.cloudinary.com/image/upload/t_profile_original,q_auto,f_auto/v1/attachments/profile/photo/8646567140bbfb813d7f4ca680216b14-1691616005743/339fcfc5-6463-426a-a38b-a781fe81fd60.jpg',
      },
      {
        uid:4,
        name:'Abderahmane Kateb',
        status: 'Software Developer ',
        imageUrl:'https://scontent.fblj1-2.fna.fbcdn.net/v/t39.30808-6/356197899_125048240645423_1996074089317841497_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=52f669&_nc_ohc=NB4dh7CeCaQAX-dQ-ob&_nc_ht=scontent.fblj1-2.fna&oh=00_AfDN8eXjCym9584OQsLckBvxmTzpTjwhSQy6-cqSOZTC5Q&oe=65026515',
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