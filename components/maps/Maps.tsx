import * as React from "react";
import MapView from "react-native-maps";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { Marker, Callout, Circle } from "react-native-maps";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { HttpClient } from "../../services/http.service";
import { ListMapsResponse } from "../../interfaces";
import { useState, useEffect } from "react";


const maps = new HttpClient();

export default function Maps() {
  const [pin, setPin] = React.useState({
    longitude: -84.45651111024087,
    latitude: 11.684712793063719,
  });

  const [places, setPlace] = useState<ListMapsResponse>({
    data: [],
    metadata: {
      nextPage: 1,
      currentPage: 1,
      perPage: 1,
    },
  });
  const getPlaces = async () => {
    const response = await maps.get<ListMapsResponse>("places");
    setPlace(response);
  };
  useEffect(() => {
    getPlaces();
  }, []);

  /* The above code is a React component that renders a map. */
  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="search"
        onPress={(data, details = null) => {
          console.log(data, details);
        }}
        query={{
          key: "googleApi",
          language: "es",
        }}
      />
      <MapView
        style={styles.map}
        minZoomLevel={10}
        maxZoomLevel={20}
        initialRegion={{
          longitude: -84.45651111024087,
          latitude: 11.684712793063719,
          longitudeDelta: 23.4396,
          latitudeDelta: 4.9668,
        }}
        provider="google"
      >
        <Marker
          coordinate={pin}
          pinColor="black"
          draggable={true}
          onDragStart={(e) => {
            console.log("Start", e.nativeEvent.coordinate);
          }}
          onDragEnd={(e) => {
            setPin({
              longitude: e.nativeEvent.coordinate.longitude,
              latitude: e.nativeEvent.coordinate.latitude,
            });
          }}
        >
          <Callout>
            <Text>Im here</Text>
          </Callout>
        </Marker>
        <Circle center={pin} radius={1000} />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
  },
});
