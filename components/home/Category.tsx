import react from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { useState, useEffect } from "react";
import { HttpClient } from "../../services/http.service";
import { ListCategoryResponse } from "../../interfaces";

const categories = new HttpClient();

const Category = () => {
  const [category, setCategory] = useState<ListCategoryResponse>({
    data: [],
    metadata: {
      nextPage: 1,
      currentPage: 1,
      perPage: 1,
    },
  });
  const getCategory = async () => {
    const response = await categories.get<ListCategoryResponse>("categories");
    setCategory(response);
  };
  useEffect(() => {
    getCategory();
  }, []);
  return (
    <View>
      <Text style={styles.title}>Categorias</Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        {category.data.map((categories, index) => (
          <View style={styles.container} key={index}>
            <View style={styles.imagen}>
              <Text style={styles.txt}>{categories.name}</Text>
              <View style={styles.Icon}>
                <Text style={styles.name}>{categories.description}</Text>
                <Ionicons name="ios-star" size={24} color="white" />
              </View>
              <View style={styles.timer}>
                <Ionicons
                  name="timer-outline"
                  size={20}
                  color="white"
                  style={{ margin: 5 }}
                />
                <Text style={{ fontSize: 14, color: "white" }}>
                  {categories.date}
                </Text>
              </View>
              <View>
                <Image
                  source={{
                    uri: categories.avatar,
                  }}
                  style={styles.img}
                />
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
export default Category;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    margin: 10,
  },
  txt: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    color: "white",
  },
  imagen: {
    width: 170,
    height: 270,
    backgroundColor: "gray",
    borderRadius: 25,
    alignItems: "center",
    margin: 10,
  },
  img: {
    width: 140,
    height: 140,
    borderRadius: 70,
    margin: 10,
    paddingTop: 10,
  },
  Icon: {
    flexDirection: "row",
  },
  name: {
    fontSize: 15,
    margin: 5,
    color: "white",
  },
  timer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    height: 40,
    backgroundColor: "skyblue",
    borderRadius: 20,
    opacity: 2,
  },
});
