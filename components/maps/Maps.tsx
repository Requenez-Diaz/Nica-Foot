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
  const restaurantes = [
    {
      id: 1,
      name: "Restaurante el buen sabor",
      description:
        "El mejor y único restaurante de comida china en nueva guinea",
      longlat: { latitude: 11.689895, longitude: -84.45213 },
    },
    {
      id: 2,
      name: "El palacio del café",
      description: "El mejor lugar para disfrutar de tu bebida favorite",
      longlat: { latitude: 11.699561, longitude: -84.452268 },
    },
    {
      id: 3,
      name: "La parrilla del chef",
      description: "Asados y sopas de mariscos",
      longlat: { latitude: 11.690181, longitude: -84.453514 },
    },
  ];

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
      <MapView
        style={styles.map}
        minZoomLevel={5}
        maxZoomLevel={20}
        region={{
          latitude: 11.689892,
          longitude: -84.45213,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        {places.data.map((gmaps, index) => (
          <Marker
          key={index}
            coordinate={gmaps}
          />
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  map: {
    width: "100%",
    height: "100%",
  },
});
