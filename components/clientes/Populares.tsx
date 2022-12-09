import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";

import { HttpClient } from "../../services/http.service";
import { ListPopularesResponse } from "../../interfaces";
import { useState, useEffect } from "react";

const populares = new HttpClient();

const Populares = () => {
  const [popular, setPopular] = useState<ListPopularesResponse>({
    data: [],
    metadata: {
      nextPage: 1,
      currentPage: 1,
      perPage: 1,
    },
  });
  const getPopulares = async () => {
    const response = await populares.get<ListPopularesResponse>("Populares");
    setPopular(response);
    console.log(response);
  };

  useEffect(() => {
    getPopulares();
  }, []);
  return (
    <View>
      <Text style={styles.text}> Clientes populares</Text>
      <ScrollView horizontal={true}>
        {popular.data.map((populares, index) => (
          <View style={styles.container} key={index}>
            <View style={styles.container2}>
              <View style={styles.conten}>
                <Image
                  style={styles.image}
                  source={{
                    uri: populares.image,
                  }}
                />
                <Text> {populares.name}</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Populares;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 10,
    color: "white",
  },
  container: {
    flexDirection: "row",
    paddingTop: 5,
    marginLeft: 10,
  },
  container2: {
    margin: 10,
    backgroundColor: "#dcdcdc",
    width: 160,
    height: 160,
    borderRadius: 15,
  },
  conten: {
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignContent: "center",
  },
});
