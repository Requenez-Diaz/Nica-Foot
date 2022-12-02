import React from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image
} from "react-native";

const Morecat = () => {
  return (
    <View style={styles.container}>
      <View style={styles.scroll}>
        <ScrollView horizontal={true} >
          <TouchableOpacity>
            <Text style={styles.txt}>Frescos</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.txt1}>Sopas</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.txt}>Hoteles</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.txt}>Restaurantes</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.txt}>Bares</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.txt}>Fritangas</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};
export default Morecat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 10,
  },
  scroll: {
    margin: 20
  },
  txt1: {
    justifyContent: "center",
    color: "white",
    paddingVertical: 7,
    paddingHorizontal: 20,
    borderRadius: 35,
    backgroundColor: "gray",
    fontSize: 20,
  },
  txt: {
    textAlign: "center",
    marginHorizontal: 6,
    color: "white",
    fontSize: 20,
    paddingVertical: 7,
    paddingHorizontal: 20,
    borderRadius: 50,
  },
});