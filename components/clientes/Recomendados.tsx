
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList} from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
import { HttpClient } from "../../services/http.service";
import { ListClientsResponse } from "../../interfaces";

const client = new HttpClient();

const Recomendados = () => {

  const [clients, setClients] = useState<ListClientsResponse>({
    data: [],
    metadata: {
      nextPage: 1,
      currentPage: 1,
      perPage: 1
    },

  });
  const getClients = async () => {
    const response = await client.get<ListClientsResponse>("listClients");
    setClients(response)
  }
  useEffect(() => {
    getClients();
  }, [])

  return (
    <View>
      <View style={styles.content}>
        <Text style={styles.text}>Los mas recomendados</Text>
        <TouchableOpacity>
          <Text style={styles.text}>Mas</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cont}>
        <View>
          <Image
            style={styles.image}
            source={{
              uri: "https://pickaface.net/gallery/avatar/43828622_161217_1709_cjs5.png",
            }}
          />
        </View>
        <View>
          <Text style={styles.text}>Jasson</Text>
          <View style={styles.flex}>
            <SimpleLineIcons
              name="user-following"
              size={24}
              color="black"
              style={styles.icon}
            />
            <Text style={styles.txt2}>5683</Text>
          </View>
          <View style={styles.flex}>
            <MaterialIcons
              name="storefront"
              size={24}
              color="black"
              style={styles.icon}
            />
            <Text style={styles.txt2}>56</Text>
          </View>
        </View>
        <View style={styles.dir}>
          <TouchableOpacity style={styles.btn}>
            <Text> SEGUIR</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* <FlatList
      data={clients.data}
      renderItem={renderItem}/>
      /> */}
    </View>
  );
};
export default Recomendados;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 10,
    color: "white",
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  cont: {
    backgroundColor: "#dcdcdc",
    height: 100,
    margin: 10,
    borderRadius: 10,
    flexDirection: "row",
  },
  image: {
    width: 90,
    height: 90,
    marginTop: 5,
    marginLeft: 5,
    borderRadius: 45,
    opacity: 0.8,
  },
  icon: {
    fontSize: 20,
    marginLeft: 15,
  },
  flex: {
    flexDirection: "row",
    alignItems: "center",
  },
  txt2: {
    fontSize: 12,
    marginLeft: 5,
  },
  btn: {
    width: 66,
    height: 30,
    backgroundColor: "skyblue",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    borderColor: "white",
    borderWidth: 1,
  },
  dir: {
    position: "absolute",
    left: "70%",
    top: "35%",
  },
});
