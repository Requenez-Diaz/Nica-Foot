import React from "react";
import { Text, FlatList } from "react-native";
import Inventario from "../../data/Inventario";
import InventarioItem from "./InventarioItem";
import {useState, useEffect} from 'react'


import { HttpClient } from "../../services/http.service";
import { ListInventarioResponse } from "../../interfaces";

const inventary = new HttpClient();

const InventarioLista = () => {
  const [inventari, setInventary] = useState<ListInventarioResponse>({
    data: [],
    metadata: {
      nextPage: 1,
      currentPage: 1,
      perPage: 1
    }
  });
  const getInventary = async () => { 
    const response = await inventary.get<ListInventarioResponse>("Inventary");
    setInventary(response);
  }
  useEffect(() => {
    getInventary();
  }, []);

  return (
    <FlatList
      data={inventari.data}
      ItemSeparatorComponent={() => <Text> </Text>}
      renderItem={({ item: inve }) => <InventarioItem {...inve} />}
    />
  );
};

export default InventarioLista;
