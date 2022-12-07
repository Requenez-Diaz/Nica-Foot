
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList
} from "react-native";




import { Ionicons } from "@expo/vector-icons";
const Populares = () => {
  return (
    <View>
      <Text style={styles.text}> Clientes populares</Text>
      <ScrollView horizontal={true}>
        <View style={styles.container}>
          <View style={styles.container2}>
            <View style={styles.conten}>
              <TouchableOpacity>
                <Ionicons name="add-circle-outline" size={100} color="gray" />
              </TouchableOpacity>
              <Text>Add new Client</Text>
            </View>
          </View>
          <View style={styles.container2}>
            <View style={styles.conten}>
              <Image
                style={styles.image}
                source={{
                  uri: "https://pickaface.net/gallery/avatar/43828622_161217_1709_cjs5.png",
                }}
              />
              <Text>Jasson</Text>
            </View>
          </View>
          <View style={styles.container2}>
            <View style={styles.conten}>
              <Image
                style={styles.image}
                source={{
                  uri: "https://pickaface.net/gallery/avatar/43828622_161217_1709_cjs5.png",
                }}
              />
              <Text>Jasson</Text>
            </View>
          </View>
        </View>
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
