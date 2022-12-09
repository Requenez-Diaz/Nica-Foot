import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";
import { useState, useEffect } from "react";
import { HttpClient } from "../../services/http.service";
import { ListPlaceResponse } from "../../interfaces";

const place = new HttpClient();

const Presentation = () => {
  const [places, setPlaces] = useState<ListPlaceResponse>({
    data: [],
    metadata: {
      nextPage: 1,
      currentPage: 1,
      perPage: 1,
    },
  });
  const getPlaces = async () => {
    const response = await place.get<ListPlaceResponse>("Places");
    setPlaces(response);
  };
  useEffect(() => {
    getPlaces();
  }, []);

  return (
    <View>
      <Text style={styles.text}> Luagares Recomendados</Text>
      <ScrollView horizontal={true}>
        {places.data.map((places, index) => (
          <View style={styles.container} key={index}>
            <View style={styles.container2}>
              <Image
                style={styles.img}
                source={{
                  uri: places.img
                }}
              />
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Presentation;

const styles = StyleSheet.create({
  img: {
    width: 400,
    height: 250,
    marginTop: 10,
    borderRadius: 5,
  },
  text: {
    color: "white",
    fontSize: 18,
    marginLeft: 10,
    marginRight: 10,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 5,
  },
  container2: {
    margin: 5,
  },
});
