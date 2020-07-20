import {StyleSheet} from 'react-native';
import colors from '../config/colors';

export const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  detailsCont: {
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: '500',
  },
  price: {
    marginVertical: 5,
    color: colors.secondary,
    fontSize: 24,
    fontWeight: 'bold',
  },
  userCont: {
    marginVertical: 60,
  },
});