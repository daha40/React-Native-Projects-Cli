/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, KeyboardAvoidingView , TextInput, Pressable , Platform} from 'react-native'
import React, { useContext, useState } from 'react';
import Snackbar from 'react-native-snackbar'
import {AppwriteContext} from '../appwrite/AppwriteContext';
import { AuthStackParamList } from '../routes/AuthStack';
import { NativeStackScreenProps } from '@react-navigation/native-stack';


type SignupScreenProps = NativeStackScreenProps<AuthStackParamList, 'Signup'>


const Signup = ({navigation}:SignupScreenProps) => {
    const {appwrite,setisLoggedIn} = useContext(AppwriteContext)
    const [error, setError] = useState<string>('')
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [repeatPassword, setRepeatPassword] = useState<string>('')

    const handleSignup = () => {
      if (
        name.length < 1 ||
        email.length < 1 ||
        password.length < 1 ||
        repeatPassword.length < 1
        ) {
          setError('All fields are required');
        } else if (password !== repeatPassword) {
          setError('Passwords do not match');
        } else {
          const user = {
            email,
            password,
            name,
          };
          appwrite.createAccount(user).then((response:any) => {
            if (response) {
              setisLoggedIn(true)
              Snackbar.show({
                text:'Sign Up Successful',
                duration:Snackbar.LENGTH_SHORT
              })
            }
          }).catch(e => {
            console.log(e)
            setError(e.message)
          })
    }


}
return (
  <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    style={styles.container}>
  <View style={styles.formContainer}>
    <Text style={styles.appName}>App Auth</Text>

    {/* Name */}
    <TextInput
      value={name}
      onChangeText={text => {
        setError('');
        setName(text);
      }}
      placeholderTextColor={'#AEAEAE'}
      placeholder="Name"
      style={styles.input}
    />

    {/* Email */}
    <TextInput
      value={email}
      keyboardType="email-address"
      onChangeText={text => {
        setError('');
        setEmail(text);
      }}
      placeholderTextColor={'#AEAEAE'}
      placeholder="Email"
      style={styles.input}
    />

    {/* Password */}
    <TextInput
      value={password}
      onChangeText={text => {
        setError('');
        setPassword(text);
      }}
      placeholderTextColor={'#AEAEAE'}
      placeholder="Password"
      secureTextEntry
      style={styles.input}
    />

    {/* Repeat password */}
    <TextInput
      secureTextEntry
      value={repeatPassword}
      onChangeText={text => {
        setError('');
        setRepeatPassword(text);
      }}
      placeholderTextColor={'#AEAEAE'}
      placeholder="Repeat Password"
      style={styles.input}
    />

    {/* Validation error */}
    {error ? <Text style={styles.errorText}>{error}</Text> : null}

    {/* Signup button */}
    <Pressable
      onPress={handleSignup}
      style={[styles.btn, {marginTop: error ? 10 : 20}]}>
      <Text style={styles.btnText}>Sign Up</Text>
    </Pressable>

    {/* Login navigation */}
    <Pressable
      onPress={() => navigation.navigate('Login')}
      style={styles.loginContainer}>
      <Text style={styles.haveAccountLabel}>
        Already have an account?{'  '}
        <Text style={styles.loginLabel}>Login</Text>
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
    borderRadius: 5,
    width: '80%',
    marginTop: 10,

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
    color: '#ffffff',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
  loginContainer: {
    marginTop: 60,
  },
  haveAccountLabel: {
    color: '#484848',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 15,
  },
  loginLabel: {
    color: '#3FC1D6',
  },

})

export default Signup