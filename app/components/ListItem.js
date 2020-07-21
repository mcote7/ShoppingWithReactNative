import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import AppText from './Apptext';
import colors from '../config/colors';

function ListItem({image, title, subTitle}) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image}/>
      <View>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 22,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 36,
    marginRight: 12,
  },
  title: {
    fontWeight: '600',
    fontSize: 20
  },
  subTitle: {
    color: colors.grey
  }
});
export default ListItem;