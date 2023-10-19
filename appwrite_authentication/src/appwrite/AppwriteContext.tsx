/* eslint-disable prettier/prettier */
import React, { FC, PropsWithChildren, createContext, useState } from 'react'
import Appwrite from './service'


type AppContextType = {
  appwrite: Appwrite
  isLoggedIn: boolean
  setisLoggedIn: (isLoggedIn:boolean) => void

}

export const AppwriteContext = createContext<AppContextType>({
  appwrite:  new Appwrite(),
  isLoggedIn: false,
  setisLoggedIn: () => {}
})


export const AppwriteProvider:FC<PropsWithChildren> = ({children}) => {

  const [isLoggedIn,setisLoggedIn] = useState(false)
    const defaultValue = {
    appwrite:  new Appwrite(),
    isLoggedIn,
    setisLoggedIn,
  }
  return (
    <AppwriteContext.Provider value={defaultValue}>
      {children}
    </AppwriteContext.Provider>
  )
}

export default AppwriteContext