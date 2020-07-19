import React from 'react';
import {View, StatusBar, ImageBackground} from 'react-native';

export default function App() {
  return (
    <View style={{
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff'
    }}>
    

    <StatusBar/>
    </View>
  );
};