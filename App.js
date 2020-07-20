import React from 'react';
import {StatusBar, View} from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import Card from './app/components/Card';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';

export default function App() {
  return (
    <>
    <ListingDetailsScreen/>
    <StatusBar/>
    </>
  );
};