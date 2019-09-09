import { DrawerItems } from 'react-navigation';
import React from 'react';
import { View, SafeAreaView, ScrollView, Image } from 'react-native';
import cabeamMenuLogo from '../../../assets/cabeamLogo.png';

const CustomDrawerComponent = props => (
  <SafeAreaView style={{ flex: 1 }}>
    <View
      style={{
        height: 150,
        backgroundColor: 'rgba(245,245,245,0.3)',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Image source={cabeamMenuLogo} style={{ height: 100, width: 100, borderRadius: 40 }} />
    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
);

export default CustomDrawerComponent;
