import React from 'react';
import { ImageBackground, View, Image, Text } from 'react-native';
import {styles} from '../styles/welcomeScreenStyles';

function WelcomeScreen(props) {
  return (
    <ImageBackground
      source={require('../assets/background.jpg')}
      style={styles.backgroundImage}>
    <View style={styles.logoCont}>
      <Image
        source={require('../assets/logo-red.png')}
        style={styles.logo}/>
      <Text>sell what you don't need</Text>
    </View>
    <View style={styles.loginButton}></View>
    <View style={styles.registerButton}></View>
    </ImageBackground>
  );
};
export default WelcomeScreen;