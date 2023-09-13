import {SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import FancyCards from './components/FancyCards';
import FancyCardTwo from './components/FancyCardTwo';
import FancyCardThree from './components/FancyCardThree';
import ActionCrads from './components/ActionCrads';
import ContectList from './components/ContectList';
import ProfileCard from './components/ProfileCard';




const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards/>
        <ElevatedCards/>
        <FancyCards />
        <FancyCardTwo />
        <FancyCardThree />
        <ActionCrads/>
        <ContectList/>
        <ProfileCard/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
