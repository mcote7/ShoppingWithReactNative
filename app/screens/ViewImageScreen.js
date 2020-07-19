import React from 'react';
import { Image, View, Text } from 'react-native';
import {styles} from '../styles/ViewImageScreenStyles';

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}></View>
      <View style={styles.deleteIcon}></View>
      <Image
        resizeMode={'contain'}
        source={require('../assets/chair.jpg')}
        style={styles.chair}/>
    </View>
  );
}

export default ViewImageScreen;