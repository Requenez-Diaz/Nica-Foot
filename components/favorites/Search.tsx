import React, { Component } from "react";
import { Text, View, StyleSheet, TextInput} from "react-native";
import { Feather } from "@expo/vector-icons";

const Search = () => {
  return (
    <View>
      <View style={styles.input}>
        <Feather style={styles.search} name="search" size={24} color="black" />
        <TextInput
          placeholder="Buscar Lugar Favorito"
          style={{ marginLeft: 10, height: 40, width: 300 }}
        />
      </View>
    </View>
  );
};

export default Search;
const styles = StyleSheet.create({
  input: {
    backgroundColor: "gray",
    margin: 15,
    height: 40,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  search: {
    color: "#D9D9D9",
    fontSize: 30,
    marginLeft: 10,
  },
});
