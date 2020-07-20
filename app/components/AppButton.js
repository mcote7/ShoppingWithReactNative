import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../config/colors';

function AppButton({title, onPress, color = 'primary'}) {
  return(
    <TouchableOpacity
      style={[styles.button, {backgroundColor: colors[color]}]}
      onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    marginVertical: 10,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    width: '100%',
  },
  text: {
    color: colors.white,
    fontSize: 24,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  }
})

export default AppButton;