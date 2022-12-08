import { View, Text, StyleSheet, Image } from "react-native";

const Search = () => {
  return (
    <View style={styles.container}>
      <View style={styles.welcome}>
        <Text style={styles.txt}>Welcome Melissa!</Text>
        <Image
          source={{
            uri: "https://img.europapress.es/fotoweb/fotonoticia_20200221191003_420.jpg",
          }}
          style={styles.img}
        />
      </View>
    </View>
  );
};
export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    backgroundColor: 'black',
    borderRadius: 10,
    opacity: 0.5,
    margin: 10,
    padding: 10,
  },
  txt: {
    fontWeight: "bold",
    fontSize: 16,
    color: "black",
  },
  welcome: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 5,
    alignItems: "center",
  },
  img: {
    width: 35,
    height: 35,
    borderRadius: 20,
  },
});
