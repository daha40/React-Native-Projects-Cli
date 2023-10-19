/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React, { useContext, useState, useEffect } from 'react';
import { FAB } from '@rneui/base'
import Snackbar from 'react-native-snackbar'
import {AppwriteContext} from '../appwrite/AppwriteContext';


type UserObj ={
    name:string
    email:string
}

const Home = () => {

  const [userData,setUserData] = useState<UserObj>()
  const {appwrite,setisLoggedIn} = useContext(AppwriteContext)

  const HandleLgout = () => {
      appwrite.logout().then(() => {
        setisLoggedIn(false);
        Snackbar.show({
          text:' Logout Successfully ',
          duration: Snackbar.LENGTH_SHORT
        })
      })
  }

  useEffect(() => {
    appwrite.getCurrentUser().then(response => {
      if (response) {
        const user: UserObj = {
          name: response.name,
          email: response.email
        }
        setUserData(user)
      }
    })
  }, [appwrite])

  

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.welcomeContainer}>
        <Image
          source={{
            uri: 'https://appwrite.io/images-ee/blog/og-private-beta.png',
            width: 400,
            height: 300,
            cache: 'default',
          }}
          resizeMode="contain"
        />
        <Text style={styles.message}>
        Build Fast. Scale Big. All in One Place. - By Abderahmane Kateb
        </Text>
        {userData && (
          <View style={styles.userContainer}>
            <Text style={styles.userDetails}>Name: {userData.name}</Text>
            <Text style={styles.userDetails}>Email: {userData.email}</Text>
          </View>
        )}
      </View>
      <FAB
        placement="right"
        color="#3FC1D6"
        size="large"
        title="Logout"
        icon={{name: 'logout', color: '#FFFFFF'}}
        onPress={HandleLgout}
      />
  </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#011E22',
  },
  welcomeContainer: {
    padding: 12,

    flex: 1,
    alignItems: 'center',
  },
  message: {
    fontSize: 26,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  userContainer: {
    marginTop: 50,
  },
  userDetails: {
    fontSize: 20,
    color: '#FFFFFF',
  },
})

export default Home