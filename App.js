import React from 'react';
import {View, StatusBar} from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';

export default function App() {
  return (
    <>
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <View style={{
        height: 100,
        width: 100,
        backgroundColor: 'dodgerblue',
        elevation: 20,
      }}></View>
    </View>
    <StatusBar/>
    </>
  );
};