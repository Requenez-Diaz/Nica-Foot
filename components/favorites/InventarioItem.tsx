import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import InventarioStats from "./InventaroStats";
import InventarioHeader from "./IventarioHeader";


const InventarioItem = (Props) => (
  <View key={Props.id} style={Styles.container}>
    <InventarioHeader {...Props} />
    <InventarioStats {...Props} />
  </View>
);

const Styles = StyleSheet.create({
  container: {
    backgroundColor:'#ffe4b5',
    margin:15,
    padding: 20,
    borderRadius:7,
    paddingVertical: 5,
  },

});

export default InventarioItem;
