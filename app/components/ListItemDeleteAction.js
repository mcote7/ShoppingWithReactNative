import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

function ListItemDeleteAction(props) {
  return (
    <TouchableOpacity style={styles.delete}>
      <View ><MaterialCommunityIcons name='trash-can' color='white' size={65} /></View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  delete: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primaryDark,
    width: 120,
    height: 120
  },
})

export default ListItemDeleteAction;