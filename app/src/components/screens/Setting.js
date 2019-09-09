import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import theme from '../../../styles/theme.style';

const Setting = ({ navigation }) => {
  const { navigate } = navigation;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.loginButton}
        activeOpacity={0.2}
        title="Go Home/Map"
        onPress={() => navigate('Home')}
      >
        <Text style={styles.buttonText}>CaBeam</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.MAIN_BACKGROUND_COLOR,
  },
  loginButton: {
    backgroundColor: theme.MAIN_BACKGROUND_COLOR,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 100,
    paddingRight: 100,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#542FAB',
  },
  buttonText: {
    color: theme.BUTTON_FONT_COLOR,
    fontSize: theme.BUTTON_FONT_SIZE,
    fontWeight: theme.BUTTON_FONT_WEIGHT,
  },
  navigationOptions: {
    height: 200,
  },
});

export default Setting;
