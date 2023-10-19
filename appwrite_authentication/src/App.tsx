/* eslint-disable prettier/prettier */
import React from 'react';
import { Router } from './routes/Router';
import {NavigationContainer} from '@react-navigation/native';
import { AppwriteProvider } from './appwrite/AppwriteContext';


const App = () => {
  return (
    <AppwriteProvider>
        <NavigationContainer>
            <Router /> 
        </NavigationContainer>
    </AppwriteProvider>
  );
};

export default App;
