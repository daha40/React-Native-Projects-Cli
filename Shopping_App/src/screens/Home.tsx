/* eslint-disable prettier/prettier */
import { StyleSheet, View ,FlatList,Pressable} from 'react-native'
import React from 'react'

//react navigation
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import {RootStackParamList} from '../App'

//components
import ProductItem from '../components/ProductItem'
import separator from '../components/separator'

//data
import {PRODUCTS_LIST} from '../data/contants';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>

const Home = ({navigation}: HomeProps) => {
  return (
    <View style={styles.container}>
      <FlatList
          data={PRODUCTS_LIST}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={separator}
          renderItem={({item}) => (
        <Pressable
          onPress={() => {
            navigation.navigate('Details', {
              product:item
            })
          }}
        >
          <ProductItem product={item}/>
        </Pressable>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',

    padding: 12,
    backgroundColor: '#FFFFFF',
  },
})


export default Home