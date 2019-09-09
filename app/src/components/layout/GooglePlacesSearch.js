import React, { useEffect, useCallback } from 'react';
import { View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { DIRECTIONS_API_KEY } from 'react-native-dotenv';
import styles from '../../../styles/homestyle';

const GooglePlacesSearch = ({
  userLatitude,
  userLongitude,
  destLatitude,
  destLongitude,
  handleLocationChange,
  map,
  isSlidingPanelOpen,
  toggleSlidingPanel,
  placeholderText,
}) => {
  useEffect(() => {
    updateMarkers();
  }, [destLatitude, destLongitude, userLatitude, userLongitude, updateMarkers]);

  const updateMarkers = useCallback(() => {
    const markers = [];

    if (destLatitude && destLongitude) {
      const destinationMarker = {
        latitude: destLatitude,
        longitude: destLongitude,
      };
      markers.push(destinationMarker);
    }

    if (userLatitude && userLongitude) {
      const currentLocationMarker = {
        latitude: userLatitude,
        longitude: userLongitude,
      };

      markers.push(currentLocationMarker);
    }

    if (map) {
      map.fitToCoordinates(markers, {
        // moves map to fit the coordinates on the screen
        edgePadding: {
          bottom: 400,
          right: 50,
          top: 230,
          left: 50,
        },
        animated: true,
      });
    }
    if (isSlidingPanelOpen === false && destLatitude && destLongitude) {
      toggleSlidingPanel(); // bottom container slides up
    }
  });

  return (
    <View style={styles.inputBoxWrapper}>
      <GooglePlacesAutocomplete
        placeholder={placeholderText}
        placeholderTextColor="#542FAB"
        minLength={2}
        autoFocus={false}
        returnKeyType="search" // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
        keyboardAppearance="default" // Can be left out for default keyboardAppearance https://facebook.github.io/react-native/docs/textinput.html#keyboardappearance
        listViewDisplayed="false"
        fetchDetails
        enablePoweredByContainer={false}
        renderDescription={row => row.description} // custom description render
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          handleLocationChange(details.geometry.location.lat, details.geometry.location.lng);
        }}
        getDefaultValue={() => ''}
        query={{
          // available options: https://developers.google.com/places/web-service/autocomplete
          key: DIRECTIONS_API_KEY,
          language: 'en', // language of the results
          types: ['address', 'establishment', 'postal_code'], // default: 'geocode'
          region: 'GB',
          components: 'country:gb',
        }}
        styles={{
          textInputContainer: {
            backgroundColor: 'rgba(0,0,0,0)',
            borderTopWidth: 0,
            height: 50,
          },
          textInput: {
            // borderWidth: 1,
            // borderRadius: 10,
            // borderColor: 'grey',
            marginLeft: 0,
            marginRight: 0,
            height: 50,
            color: '#542FAB',
            fontSize: 16,
            fontWeight: 'bold',
          },
          description: {
            backgroundColor: 'white',
          },
          listView: {
            backgroundColor: 'white',
            borderBottomLeftRadius: 5,
            borderBottomRightRadius: 5,
          },
        }}
      />
    </View>
  );
};

export default GooglePlacesSearch;
