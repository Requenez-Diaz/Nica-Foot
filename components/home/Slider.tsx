import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

interface Props {
  image: {};
}

const Slider = ({ image }: Props) => {
  return (

    <View style={styles.container2}>
      <View>
        <Image
          source={image}
          style={styles.img}
        />
      </View>
    </View>

  );
};

export default Slider;
const styles = StyleSheet.create({
  container2: {
    margin: 2,
    padding: 10
  },
  img: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});
