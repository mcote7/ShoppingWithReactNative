import React from 'react';
import {StatusBar} from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';

export default function App() {
  return (
    <>
    <WelcomeScreen/>
    <StatusBar/>
    </>
  );
};