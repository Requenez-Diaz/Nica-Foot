import React from "react";
import { View, ScrollView } from "react-native";
import Header from "./favorites/Header";
import InventarioLista from "./favorites/InventarioLista";
import Search from "./favorites/Search";
import IconsBar from "./favorites/IconsBar";
import IconSelect from "./favorites/IconSelect";

const FavoriteComponent = () => {
  return (
    <View style={{ backgroundColor: "rgb(38, 50, 56)", }}>
      <Search />
        <Header />
        <IconsBar />
        <IconSelect />
      <InventarioLista />
    </View>
  );
};

export default FavoriteComponent;
