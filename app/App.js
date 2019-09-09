import { createStackNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation';
import React from 'react';
import { Feather } from '@expo/vector-icons';
import Setting from './src/components/screens/Setting';
import Home from './src/components/screens/Home';
import Welcome from './src/components/screens/Welcome';
import CustomDrawerComponent from './src/components/layout/Drawer';
import MenuButton from './src/components/layout/MenuButton';
import './global';

const MainNavigation = createDrawerNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => <Feather name="home" style={{ fontSize: 24, color: tintColor }} />,
      },
    },
    Setting: {
      screen: Setting,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => <Feather name="settings" style={{ fontSize: 24, color: tintColor }} />,
      },
    },
  },
  {
    contentComponent: CustomDrawerComponent,
    drawerWidth: global.width * 0.3,
    contentOptions: {
      itemStyle: {
        justifyContent: 'center',
        paddingTop: 12,
        paddingLeft: 33,
        paddingBottom: 13,
        borderRadius: 80,
        marginLeft: 30,
        marginTop: 25,
        width: 50,
        height: 50,
        alignItems: 'center',
      },
      activeTintColor: '#542FAB',
      inactiveBackgroundColor: 'white',
      activeBackgroundColor: 'white',
    },
    drawerBackgroundColor: 'rgba(255,255,255,0.7)',
  }
);
const StackNavigation = createStackNavigator(
  {
    Welcome: {
      screen: Welcome,
      navigationOptions: {
        header: null,
      },
    },
    Home: { screen: MainNavigation },
    Setting: { screen: Setting },
  },
  {
    initialRouteName: 'Welcome',
    defaultNavigationOptions: ({ navigation }) => ({
      headerLeft: <MenuButton navigation={navigation} />,
    }),
  }
);
const App = createAppContainer(StackNavigation);

export default App;
