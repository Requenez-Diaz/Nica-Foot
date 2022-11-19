import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Slider = () => {
  return (
    <View style={styles.container2}>
      <View>
        <Image
          source={{
            uri: "https://cdn.forbescentroamerica.com/2022/05/Restaurantes-en-Nicaragua-1.jpg",
          }}
          style={styles.img}
        />
      </View>
    </View>
  );
};

export default Slider;
const styles = StyleSheet.create({
  container2: {
    flex: 1,
    margin:2,
    padding: 2
  },
  img: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius:10,
    borderBottomRightRadius: 10
  }
});
