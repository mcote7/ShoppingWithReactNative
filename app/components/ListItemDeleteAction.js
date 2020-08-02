import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function ListItemDeleteAction(props) {
  return (
    <View style={styles.delete}><MaterialCommunityIcons name='trash-can-outline' color='white' size={45} /></View>
  );
}
const styles = StyleSheet.create({
  delete: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primaryDark,
    width: 70
  },
})

export default ListItemDeleteAction;