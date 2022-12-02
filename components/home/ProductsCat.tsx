import React from "react";
import { Dimensions } from 'react-native';
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Image,
} from "react-native";
const {width, height} = Dimensions.get('window')
const carruselItems = require("../../data/carrusel.json");

interface CarruselItems {
  title: string;
  Price: string;
  url: string;
}

export default function ProductsCat () {
    // let flatListRef = useref<FlatList<CarruselItems> | null>();

  const renderItems: React.FC<{ item: CarruselItems }> = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => console.log("clicked")}>
        <Image source={{ uri: item.url }} style={styles.image} />
        <View style={styles.footer}>
          <Text style={styles.footerText}>{item.title}</Text>
          <Text style={styles.footerText}>{item.Price}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={carruselItems}
        renderItem={renderItems}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={true}
        pagingEnabled
        // ref={(ref) => {
        //     flatListRef.current = ref
        // }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
  },
  image: {
    width,
    height: 250,
    resizeMode: 'cover',
    marginVertical: 20
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 50,
    paddingHorizontal: 40,
    alignItems: 'center',
    backgroundColor: '#000'
  },
  footerText: {
    color: '#ffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
