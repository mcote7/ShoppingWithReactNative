import {StyleSheet} from 'react-native';
import colors from '../config/colors';

export const styles = StyleSheet.create({
  closeIcon: {
    height: 50,
    width: 50,
    position: 'absolute',
    top: 40,
    left: 5,
    backgroundColor: colors.primary,
  },
  deleteIcon: {
    height: 50,
    width: 50,
    position: 'absolute',
    top: 40,
    right: 5,
    backgroundColor: colors.secondary,
  },
  chair: {
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});