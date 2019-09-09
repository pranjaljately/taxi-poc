import { StyleSheet, Platform } from 'react-native';
import themeStyle from './theme.style';
import '../global';

const boxwidth = global.width * 0.8; // so destination input box is in the same position for all screens
const destinationboxheight = global.height * 0.1; // vertical position of destination search box
const pickupboxheight = global.height * 0.03; // vertical position of pickup search box

const taxiList = global.width * 0.9;

export default StyleSheet.create({
  droidSafeArea: {
    paddingTop: Platform.OS === 'android' ? 10 : 0,
    backgroundColor: 'transparent',
    borderBottomWidth: 0,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  searchBarContainer: {
    flex: 1,
    alignItems: 'center',
  },
  pickupContainer: {
    position: 'absolute',
    marginTop: pickupboxheight,
    zIndex: 999,
    elevation: 99,
  },
  destinationContainer: {
    position: 'absolute',
    marginTop: destinationboxheight,
    zIndex: 998,
    elevation: 98,
  },
  map: { ...StyleSheet.absoluteFillObject, flex: 1, zIndex: -1, elevation: 1, position: 'absolute' },

  bottomcontainer: {
    flex: 1,
    backgroundColor: '#F9F8F6',
    alignItems: 'center',
    justifyContent: 'flex-start',
    position: 'absolute',
    height: global.height * 0.7,
    elevation: 999,
    zIndex: 999,
    width: taxiList,
    borderRadius: 20,
  },
  inputBoxWrapper: {
    width: boxwidth,
    paddingTop: 0,
    paddingBottom: 0,
  },
  taxiListHeader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  taxiListHeaderButton: {
    backgroundColor: 'white',
    paddingLeft: 20,
    paddingRight: 20,
    borderWidth: 0,
  },
  taxiListHeaderButtonText: {
    fontSize: themeStyle.FONT_SIZE_MEDIUM,
    fontWeight: 'bold',
    color: themeStyle.PRIMARY_COLOR,
  },
  taxiList: {
    padding: 20,
    paddingRight: 50,
  },
  taxiDownload: {
    padding: 20,
  },
  scrollViewTaxi: {
    flex: 3,
    paddingLeft: 10,
  },
  scrollViewDownload: {
    flex: 3,
    paddingLeft: 10,
  },
  taxiImage: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  taxiImageDescription: {
    fontSize: 11,
    alignItems: 'center',
    textAlign: 'center',
  },
  scrollViewTaxiDescription: {
    fontSize: themeStyle.FONT_SIZE_SMALL,
    fontWeight: 'bold',
    color: themeStyle.PRIMARY_COLOR,
  },
});
