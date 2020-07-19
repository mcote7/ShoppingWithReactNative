import React from 'react';
import {View, StatusBar} from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {
  return (
    <>
    <WelcomeScreen/>
    <StatusBar/>
    </>
  );
};