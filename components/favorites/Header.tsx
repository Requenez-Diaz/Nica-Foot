import React from "react";
import { View, Text, StyleSheet, Image, TextInput } from "react-native";


const Header = () => {
  return (
    <View>

      <View style={styles.container}>
        <Image
          source={{
            uri: "https://lumiere-a.akamaihd.net/v1/images/thor_amor_y_trueno_3cc74888.jpeg?region=420,0,1080,1080",
          }}
          style={styles.img}
        />
      </View>
    </View>
  );
};
export default Header;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
   
  },
  img: {
    height: 140,
    width: 140,
    borderRadius: 70,
    marginTop: 15,
  },
});
