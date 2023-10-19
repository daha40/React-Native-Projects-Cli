/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, KeyboardAvoidingView , TextInput, Pressable , Platform} from 'react-native'
import React, { useContext, useState } from 'react';
import Snackbar from 'react-native-snackbar'
import {AppwriteContext} from '../appwrite/AppwriteContext';
import { AuthStackParamList } from '../routes/AuthStack';
import { NativeStackScreenProps } from '@react-navigation/native-stack';


type LoginScreenProps = NativeStackScreenProps<AuthStackParamList, 'Login'>


const Login = ({navigation}:LoginScreenProps) => {
    const {appwrite,setisLoggedIn} = useContext(AppwriteContext)
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [error, setError] = useState<string>('')


    const handleLogin  = () => {
      if (email.length < 1 || password.length < 1) {
        setError('All fields are required')
      } else {
        const user = {
          email,
          password
        }
        appwrite.login(user).then((response) => {
            if (response) {
              setisLoggedIn(true)
              Snackbar.show({
                text: 'Login Success',
                duration: Snackbar.LENGTH_SHORT
              })
            }
        }).catch(e => {
          console.log(e)
          setError("Incorrect email or password")
        })
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.appName}>App Auth</Text>

        {/* Email */}
        <TextInput
          keyboardType="email-address"
          value={email}
          onChangeText={text => setEmail(text)}
          placeholderTextColor={'#AEAEAE'}
          placeholder="Email"
          style={styles.input}
        />

        {/* Password */}
        <TextInput
          value={password}
          onChangeText={text => setPassword(text)}
          placeholderTextColor={'#AEAEAE'}
          placeholder="Password"
          style={styles.input}
          secureTextEntry
        />

        {/* Validation error */}
        {error ? <Text style={styles.errorText}>{error}</Text> : null}

        {/* Login button */}
        <Pressable
          onPress={handleLogin}
          style={[styles.btn, {marginTop: error ? 10 : 20}]}>
          <Text style={styles.btnText}>Login</Text>
        </Pressable>

        {/* Sign up navigation */}
        <Pressable
          onPress={() => navigation.navigate('Signup')}
          style={styles.signUpContainer}>
          <Text style={styles.noAccountLabel}>
            Don't have an account?{'  '}
            <Text style={styles.signUpLabel}>Create an account</Text>
          </Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  )
}
    

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  formContainer: {
    justifyContent: 'center',
    alignContent: 'center',
    height: '100%',
  },
  appName: {
    color: '#3FC1D6',
    fontSize: 50,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 25,
  },
  input: {
    backgroundColor: '#fef8fa',
    padding: 10,
    height: 45,
    alignSelf: 'center',
    borderRadius: 4,

    width: '80%',
    color: '#000000',

    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 1,
  },
  errorText: {
    color: 'red',
    alignSelf: 'center',
    marginTop: 10,
  },
  btn: {
    backgroundColor: '#3FC1D6',
    padding: 10,
    height: 50,

    alignSelf: 'center',
    borderRadius: 6,
    width: '80%',
    marginTop: 20,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 3,
  },
  btnText: {
    color: '#FFFFFF',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
  signUpContainer: {
    marginTop: 50,
  },
  noAccountLabel: {
    color: '#484848',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 15,
  },
  signUpLabel: {
    color: '#3FC1D6',
  },

})


export default Login