/* eslint-disable prettier/prettier */
import React from 'react'
import type { PropsWithChildren } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

type IconsProps = PropsWithChildren<{
    name: string
}>

const Icons = ({name} : IconsProps) => {
  switch (name) {
    case 'circle':
        return <Icon name="circle-thin" size={50} color="#FF7210" />
    case 'cross':
        return <Icon name="times" size={50} color="#0067FF" />
    default:
      return <Icon name="emtey" size={50} color="#000000" />
  }
}

export default Icons