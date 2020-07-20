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
  logoText: {
    fontSize: 22,
    fontWeight: 'bold',
    paddingVertical: 10,
    color: colors.secondaryDark,
  },
  btnCont: {
    width: '100%',
    padding: 20,
  },
});
