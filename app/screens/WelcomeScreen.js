import React from 'react';
import { ImageBackground, View, Image, Text } from 'react-native';
import {styles} from '../styles/welcomeScreenStyles';

function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={2}
      source={require('../assets/background.jpg')}
      style={styles.backgroundImage}>
    <View style={styles.logoCont}>
      <Image
        source={require('../assets/logo-red.png')}
        style={styles.logo}/>
      <Text>sell what you don't need</Text>
    </View>
    
    </ImageBackground>
  );
};
export default WelcomeScreen;