import React from "react";
import { View, Text, ScrollView } from "react-native";
import Header from "./favorites/Header";
import InventarioLista from "./favorites/InventarioLista";
import Search from "./favorites/Search";
import IconsBar from "./favorites/IconsBar";

const FavoriteComponent = () => {
  return (

      <View>
        <Search/>
     
        <ScrollView>
        <View>
        <IconsBar/>
          <Header />
          <InventarioLista />
        </View>
        </ScrollView>
      </View>

  );
};

export default FavoriteComponent;
