import React, { Component } from 'react';
import { View, Animated } from 'react-native';
import { DIRECTIONS_API_KEY } from 'react-native-dotenv';
import Polyline from '@mapbox/polyline';
import { Icon } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from '../../../styles/homestyle';
import GooglePlacesSearch from '../layout/GooglePlacesSearch';
import SlideUpContent from '../layout/SlideUpPanelContent';
import Map from '../layout/Map';
import '../../../global';

const bottomcontainerheight = global.height * 0.33;
const slidingPanelinitHeight = new Animated.Value(bottomcontainerheight + 300);

export default class Home extends Component {
  state = {
    destLatitude: null,
    destLongitude: null,
    error: null,
    coordinates: [],
    userLatitude: null,
    userLongitude: null,
    isSlidingPanelOpen: false,
    quotes: [],
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          userLatitude: position.coords.latitude,
          userLongitude: position.coords.longitude,
        });
      },
      error => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 200000, maximumAge: 1000 }
    );
  }

  componentDidUpdate(prevProps, prevState) {
    const { destLatitude, destLongitude, userLatitude, userLongitude } = this.state;

    if (destLatitude == null && destLongitude == null) {
      return;
    }
    if (prevState.destLatitude !== destLatitude || prevState.destLongitude !== destLongitude) {
      this.getDirections(`${userLatitude},${userLongitude}`, `${destLatitude},${destLongitude}`);
      this.getQuotes();
    }
    if (prevState.userLatitude !== userLatitude || prevState.userLongitude !== userLongitude) {
      this.getDirections(`${userLatitude},${userLongitude}`, `${destLatitude},${destLongitude}`);
      this.getQuotes();
    }
  }

  getDirections = async (origin, destination) => {
    try {
      const res = await fetch(
        `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&mode=driving&key=${DIRECTIONS_API_KEY}`
      );

      const data = await res.json();
      const points = Polyline.decode(data.routes[0].overview_polyline.points);
      const coords = points.map(point => ({
        latitude: point[0],
        longitude: point[1],
      }));
      this.setState({ coordinates: coords });
    } catch (error) {
      alert(error);
      return error;
    }
  };

  handleDestinationChange = (destLatitude, destLongitude) => {
    this.setState({
      destLatitude,
      destLongitude,
    });
  };

  handleUserLocationChange = (userLatitude, userLongitude) => {
    this.setState({
      userLatitude,
      userLongitude,
    });
  };

  handleDragEnd = ({ latitude, longitude }) => {
    this.setState({ destLatitude: latitude, destLongitude: longitude });
  };

  toggleSlidingPanel = () => {
    const slidingPanel = !this.state.isSlidingPanelOpen;
    this.setState({
      isSlidingPanelOpen: slidingPanel,
    });

    const toValue = slidingPanel ? bottomcontainerheight - 250 : bottomcontainerheight + 300;

    // This will animate the transalteY of the subview between 0 & 100 depending on its current state
    // 100 comes from the style below, which is the height of the subview.
    Animated.spring(slidingPanelinitHeight, {
      toValue,
      velocity: 3,
      tension: 2,
      friction: 8,
    }).start();
  };

  setRef = ref => {
    this._map = ref;
  };

  getQuotes = async () => {
    const { destLatitude, destLongitude, userLatitude, userLongitude } = this.state;
    const res = await fetch(`http://192.168.0.13:5000/api/quotes/1-2-3-4`);
    const data = await res.json();
    this.setState({
      quotes: data,
    });
  };

  render() {
    const {
      destLatitude,
      destLongitude,
      error,
      coordinates,
      userLatitude,
      userLongitude,
      isSlidingPanelOpen,
      quotes,
    } = this.state;

    if (error) {
      return <View>{error}</View>;
    }
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.container}>
          {userLatitude && userLongitude && (
            <Map
              userLatitude={userLatitude}
              userLongitude={userLongitude}
              destLatitude={destLatitude}
              destLongitude={destLongitude}
              setRef={this.setRef}
              handleDragEnd={this.handleDragEnd}
              coordinates={coordinates}
            />
          )}

          <Animated.View style={[styles.bottomcontainer, { transform: [{ translateY: slidingPanelinitHeight }] }]}>
            <TouchableOpacity onPress={() => this.toggleSlidingPanel()}>
              <Icon name="ios-arrow-down"></Icon>
            </TouchableOpacity>
            <SlideUpContent quotes={quotes} />
          </Animated.View>

          <View style={styles.searchBarContainer}>
            <View style={styles.destinationContainer}>
              <GooglePlacesSearch
                userLatitude={userLatitude}
                userLongitude={userLongitude}
                destLatitude={destLatitude}
                destLongitude={destLongitude}
                handleLocationChange={this.handleDestinationChange}
                map={this._map}
                isSlidingPanelOpen={isSlidingPanelOpen}
                toggleSlidingPanel={this.toggleSlidingPanel}
                placeholderText="Where to go?"
              />
            </View>
            <View style={styles.pickupContainer}>
              <GooglePlacesSearch
                userLatitude={userLatitude}
                userLongitude={userLongitude}
                destLatitude={destLatitude}
                destLongitude={destLongitude}
                handleLocationChange={this.handleUserLocationChange}
                map={this._map}
                isSlidingPanelOpen={isSlidingPanelOpen}
                toggleSlidingPanel={this.toggleSlidingPanel}
                placeholderText="Your location"
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}
