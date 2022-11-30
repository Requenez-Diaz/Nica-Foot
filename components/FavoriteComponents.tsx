import React from "react";
import { View,ScrollView } from "react-native";
import Header from "./favorites/Header";
import InventarioLista from "./favorites/InventarioLista";
import Search from "./favorites/Search";
import IconsBar from "./favorites/IconsBar";
import IconSelect from "./favorites/IconSelect";

const FavoriteComponent = () => {
  return (

    <View>
      <Search />
      <ScrollView>
        <View>
          <Header />
          <IconsBar />
          <IconSelect/>
          <InventarioLista />
        </View>
      </ScrollView>
    </View>

  );
};

export default FavoriteComponent;
