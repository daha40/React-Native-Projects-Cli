/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, KeyboardAvoidingView , TextInput, Pressable , Platform} from 'react-native'
import React, { useContext, useState, useEffect } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppwriteContext} from '../appwrite/AppwriteContext';
//Component
import Loading from '../components/Loading';
//Route
import { AppStack } from '../routes/AppStack';
import { AuthStack } from '../routes/AuthStack';


export const Router = () => {
  const [isLoading,setisLoading] = useState<boolean>(true)
  const {appwrite,isLoggedIn,setisLoggedIn} = useContext(AppwriteContext)

  useEffect(() => {
    appwrite.getCurrentUser().then(response => {
      setisLoading(false)
      if (response) {
        setisLoggedIn(true)
      }
    }).catch(_ => {
      setisLoading(false)
      setisLoggedIn(false)
    })
  }, [appwrite,setisLoggedIn])

  if (isLoading) {
    return <Loading />
  }

  
  return (
    <>
      {isLoggedIn ? <AppStack/> : <AuthStack/> }
    </>
  );
};
