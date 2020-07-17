// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Text, Image, TouchableOpacity, SafeAreaView, Alert, Button} from 'react-native';
import {styles} from './styles/newStyle'

export default function App() {
  const handlePress = () => {
    console.log("handle pressed")
  }
  console.log("App exicuted")
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text} onPress={handlePress}>Welcome to my store!</Text>
      <TouchableOpacity>
        <Image 
          style={styles.image}
          fadeDuration={2000}
          source={{
          width: 300,
          height: 400,
          uri: "https://picsum.photos/200/300"}}/>
      </TouchableOpacity>
        <Button title='click me' onPress={()=> 
        Alert.alert('my message', 'hey dude', [
          {text: 'yes'},
          {text: 'no'},
          {text: 'mabye'},
        ])}/>
      {/* <StatusBar style="auto" /> */}
    </SafeAreaView>
  );
}


