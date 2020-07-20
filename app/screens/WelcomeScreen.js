import React from 'react';
import { ImageBackground, View, Image, Text } from 'react-native';
import {styles} from '../styles/welcomeScreenStyles';
import AppButton from '../components/AppButton';

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
      <Text style={styles.logoText}>sell what you don't need</Text>
    </View>
    <View style={styles.btnCont}>
      <AppButton title='login' onPress={()=>console.log('login pressed')}/>
      <AppButton color='secondary' title='register' onPress={()=>console.log('login pressed')}/>
    </View>
    </ImageBackground>
  );
};
export default WelcomeScreen;