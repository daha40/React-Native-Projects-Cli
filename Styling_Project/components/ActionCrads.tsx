import { StyleSheet, Text, View , Linking, Image , TouchableOpacity} from 'react-native'
import React from 'react'

export default function ActionCrads() {
    function openWebsite (websiteLink : string){
      Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View  style={[styles.card, styles.CardElevated]}>
        <View style={styles.headingContainer }>
            <Text style={styles.headerText}>
                Expo vs. CLI
            </Text>
        </View>
            <Image
            source={{
              uri:'https://i.ytimg.com/vi/SEDlPEdmKhI/maxresdefault.jpg'
            }}
            style={styles.cardImage}
            />
            <View style={styles.bodyContiner}>
              <Text numberOfLines={5}  style={styles.textBody}> 
              When embarking on mobile app development, you'll be faced with two primary choices: Expo and CLI (Command Line Interface). Each of these tools has its own set of features and use cases. Below is a comparison to help you make the right decision based on your project needs.
              </Text>
            </View>

            <View style={styles.footerContiner}>
              <TouchableOpacity
              onPress={()=> openWebsite('https://abderahmane-kateb.hashnode.dev/expo-vs-cli-choosing-the-right-tool-for-mobile-app-development')}
              >
                <Text style={styles.LinkingText}>
                  Read More
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
              onPress={()=> openWebsite('https://github.com/daha40')}
              >
                <Text style={styles.LinkingText}>
                Follow Me 
                </Text>
              </TouchableOpacity>
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
    marginTop:20
  },
  card:{
    height:360,
    width:350,
    borderRadius:11,
    marginHorizontal:30,
    marginVertical:12,
  },
  CardElevated:{
    backgroundColor:'#E5E5E5',
    elevation:5,
    shadowOffset:{
      width:1,
      height:1,
    },
    shadowColor:'#333',
    shadowOpacity:0.3
  },
  headingContainer:{
    height:30,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#28C9FF',
    borderTopLeftRadius:11,
    borderTopRightRadius:11,
  },
  headerText:{
    color:'#fff',
    fontSize:18,
    fontWeight:'bold'
  },
  cardImage:{
    height:180,
    shadowOffset:{
      height:1,
      width:1,
    },
    shadowColor:'#000',
    shadowOpacity:0.6,
    shadowRadius:3
  },
  bodyContiner:{
    padding:8,
  },
  footerContiner:{
    padding:8,
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignItems:'center',
  },
  LinkingText:{
    fontSize:17,
    color:'#fff',
    fontWeight:'500',
    backgroundColor:'#28C9FF',
    paddingHorizontal:17,
    paddingVertical:5,
    borderRadius:20,
  },
  textBody:{
    fontSize:14,
    fontWeight:'400',
    color:'#000',
    flexShrink:1,
  }


})