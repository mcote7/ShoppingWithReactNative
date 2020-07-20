import React from 'react';
import { Image, View } from 'react-native';
import {styles} from '../styles/ViewImageScreenStyles';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name='close' color='white' size={45}/>
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons name='trash-can-outline' color='white' size={45}/>
      </View>
      <Image
        resizeMode={'contain'}
        source={require('../assets/chair.jpg')}
        style={styles.chair}/>
    </View>
  );
};
export default ViewImageScreen;