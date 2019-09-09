import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { Image } from 'react-native';
import mapstyle from '../../../styles/mapstyles';
import mapmarker from '../../../assets/mapmarker.png';
import styles from '../../../styles/homestyle';

const Map = ({ userLatitude, userLongitude, destLatitude, destLongitude, handleDragEnd, coordinates, setRef }) => {
  const markerSize = 30;
  return (
    <MapView
      ref={setRef}
      provider={MapView.PROVIDER_GOOGLE}
      style={styles.map}
      showsMyLocationButton
      enablePoweredByContainer={false}
      initialRegion={{
        latitude: userLatitude,
        longitude: userLongitude,
        latitudeDelta: 0.015, // zoom of the map
        longitudeDelta: 0.015,
      }}
      customMapStyle={mapstyle}
      showsUserLocation
    >
      <MapView.Polyline coordinates={coordinates} strokeWidth={4} strokeColor="#542FAB" />
      {destLatitude && destLongitude && (
        <Marker
          draggable
          onDragEnd={e => {
            handleDragEnd(e.nativeEvent.coordinate);
          }}
          coordinate={{
            latitude: destLatitude,
            longitude: destLongitude,
          }}
          title="Your Destination"
        >
          <Image source={mapmarker} style={{ width: markerSize, height: markerSize }} />
        </Marker>
      )}
    </MapView>
  );
};
export default Map;
