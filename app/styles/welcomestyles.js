import { StyleSheet } from 'react-native';
import theme from './theme.style';
import '../global';

export default StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.MAIN_BACKGROUND_COLOR,
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.MAIN_BACKGROUND_COLOR,
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.MAIN_BACKGROUND_COLOR,
  },
  text: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },

  bottomtext: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    bottom: 140,
  },
  smalltext: {
    color: 'white',
    fontSize: 18,
    bottom: 80,
  },
  image: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 60,
  },
});
