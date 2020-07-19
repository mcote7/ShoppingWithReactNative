import {StyleSheet} from 'react-native';
import colors from '../config/colors';

export const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logoCont: {
    position: 'absolute',
    alignItems: 'center',
    top: 70,
  },
  logo: {
    height: 100,
    width: 100,
  },
  loginButton: {
    width: '100%',
    height: 70,
    backgroundColor: colors.primary,
  },
  registerButton: {
    width: '100%',
    height: 70,
    backgroundColor: colors.secondary,
  },
});
