import React from 'react';
import { Text, View, SafeAreaView, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from '../../../styles/welcomestyles';
import cabeamMenuLogo from '../../../assets/cabeamLogo.png';
import theme from '../../../styles/theme.style';

const Welcome = ({ navigation }) => {
  const { navigate } = navigation;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.MAIN_BACKGROUND_COLOR }}>
      <Swiper style={styles.wrapper} showsButtons loop={false}>
        <SafeAreaView style={styles.slide1}>
          <View style={{ top: 70, justifyContent: 'space-evenly', alignItems: 'center' }}>
            <Text style={styles.text}>Hello!</Text>
            <Text style={styles.text}>Welcome to Cabeam!</Text>
          </View>
          <View style={styles.image}>
            <Image source={cabeamMenuLogo} style={{ height: 200, width: 200, borderRadius: 40 }} />
          </View>
          <View style={{ flex: 1, justifyContent: 'space-evenly', alignItems: 'center', top: 80 }}>
            <Text style={styles.bottomtext}>Step 1</Text>
            <Text style={styles.smalltext}>Where are you going?</Text>
            <Text style={styles.smalltext}>Input the address of your destination</Text>
          </View>
          <View style={{ flex: 1, justifyContent: 'space-evenly' }}>
            <TouchableOpacity onPress={() => navigate('Home')}>
              <Text style={{ color: '#306EFF', fontWeight: '600', textAlign: 'center' }}>Skip</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>

        <SafeAreaView style={styles.slide2}>
          <View style={styles.image}>
            <Image source={cabeamMenuLogo} style={{ height: 200, width: 200, borderRadius: 40, top: 50 }} />
          </View>
          <View style={{ flex: 1, justifyContent: 'space-evenly', alignItems: 'center', top: 109 }}>
            <Text style={styles.bottomtext}>Step 2</Text>
            <Text style={styles.smalltext}>Select the Cab Company.</Text>
            <Text style={styles.smalltext}>Compare all rides, easily sort</Text>
            <Text style={styles.smalltext}> by price or arrival time.</Text>
          </View>
          <View style={{ flex: 1, justifyContent: 'space-evenly' }}>
            <TouchableOpacity onPress={() => navigate('Home')}>
              <Text style={{ color: '#306EFF', fontWeight: '600', textAlign: 'center' }}>Skip</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>

        <SafeAreaView style={styles.slide3}>
          <View style={styles.image}>
            <Image source={cabeamMenuLogo} style={{ height: 200, width: 200, borderRadius: 40, top: 50 }} />
          </View>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', top: 80 }}>
            <Text style={styles.bottomtext}>Step 3</Text>
            <Text style={styles.smalltext}>Book your ride and save money.</Text>
          </View>
          <View style={{ flex: 1, justifyContent: 'space-evenly', alignItems: 'center' }}>
            <TouchableOpacity
              style={{
                borderWidth: 2,
                padding: 15,
                borderColor: 'white',
                borderRadius: 30,
                backgroundColor: 'white',
                width: 150,
                marginBottom: 15,
              }}
              onPress={() => navigate('Home')}
            >
              <Text style={{ color: theme.MAIN_BACKGROUND_COLOR, fontWeight: '600', textAlign: 'center' }}>Start!</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </Swiper>
    </SafeAreaView>
  );
};

export default Welcome;
