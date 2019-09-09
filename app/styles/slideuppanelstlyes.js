import { StyleSheet } from 'react-native';
import themeStyle from './theme.style';
import '../global';

export default StyleSheet.create({
  // tab button styles
  tabsContainerStyle: {
    padding: 10,
    width: global.width * 0.8,
  },
  tabStyle: {
    borderColor: themeStyle.PRIMARY_COLOR,
  },
  activeTabStyle: {
    backgroundColor: themeStyle.MAIN_BACKGROUND_COLOR,
  },
  tabTextStyle: {
    color: 'black',
  },
});
