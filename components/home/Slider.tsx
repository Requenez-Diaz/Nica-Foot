import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

interface Props {
  url: string;
}

const Slider = ({ url }: Props) => {
  return (
    <View style={styles.container2}>
      <View style={styles.direction}>
        <Image
          source={{
            uri: url,
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
    flexDirection: "row",
    margin: 2,
    padding: 2
  },
  img: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  direction: {
    flex: 1,
    flexDirection: "row",
  }
});
