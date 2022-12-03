import React from "react";
import { Text, FlatList } from "react-native";
import Inventario from "../../data/Inventario";
import InventarioItem from "./InventarioItem";

const InventarioLista = () => {
  return (
    <FlatList
      data={Inventario}
      ItemSeparatorComponent={() => <Text> </Text>}
      renderItem={({ item: inve }) => <InventarioItem {...inve} />}
    />
  );
};

export default InventarioLista;
