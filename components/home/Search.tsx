import { View, Text, StyleSheet } from "react-native";

const Search = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.txt}>Welcome Melissa!</Text>
      </View>
    </View>
  );
};
export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    margin: 10,
    padding: 10,
  },
  txt: {
    fontWeight: "bold",
    fontSize: 16,
    color: "gray",
  }
});
