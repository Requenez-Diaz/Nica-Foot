import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import ItemHeader from "./ItemHeader";

import { HttpClient } from "../../services/http.service";
import { ListClientsResponse } from "../../interfaces";

const clients = new HttpClient();

const HeaderList = () => {
  const [client, setClient] = useState<ListClientsResponse>({
    data: [],
    metadata: {
      nextPage: 1,
      currentPage: 1,
      perPage: 1,
    },
  });

  const getClient = async () => {
    const response = await clients.get<ListClientsResponse>("Client");
    setClient(response);
  };
  useEffect(() => {
    getClient();
  }, []);

  return (
    <FlatList
      data={client.data}
      ItemSeparatorComponent={() => <Text> </Text>}
      renderItem={({ item: clien }) => <ItemHeader {...clien} />}
    />
  );
};

export default HeaderList;

const styles = StyleSheet.create({});
