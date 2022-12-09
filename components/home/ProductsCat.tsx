import React, { useRef, useState } from "react";
import { Dimensions } from "react-native";
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Image,
} from "react-native";
/* It's getting the width and height of the device and the carruselItems is getting the data from the
json file. */
const { width, height } = Dimensions.get("window");
const carruselItems = require("../../data/carrusel.json");
const viewConfigRef = { viewAreaCoveragePercentThreshold: 95 };

interface CarruselItems {
  title: string;
  Price: string;
  url: string;
}

/**
 * It's a function that returns a view that contains a flatlist that renders a touchableopacity that
 * contains an image and a view that contains two text elements.
 * @returns A function that returns a view.
 */
export default function ProductsCat() {
  let flatListRef = useRef<FlatList<CarruselItems> | null>();
  const [currentIndex, setCurrentIndex] = useState(0);

  const onViewRef = useRef(({ changed }: { changed: any }) => {
    if (changed[0].isViewable) {
      setCurrentIndex(changed[0].Index);
    }
  });

  const renderItems: React.FC<{ item: CarruselItems }> = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => console.log("clicked")}
        activeOpacity={1}
      >
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
        ref={(ref) => {
          flatListRef.current = ref;
        }}
        style={styles.carousel}
        // viewabilityConfig={viewConfigRef}
        // onViewableItemsChanged={onViewRef.current}
      />
      {/* <View style={styles.doView}>
        {carruselItems.map(({}, index: number) => (
          <TouchableOpacity
            key={index.toString()}
            style={[
              styles.circle,
              { backgroundColor: index == currentIndex ? "black" : "gray" },
            ]}
          />
        ))}
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
  },
  carousel: {
    maxHeight: 300,
  },
  image: {
    width,
    height: 250,
    resizeMode: "cover",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 50,
    paddingHorizontal: 40,
    alignItems: "center",
    backgroundColor: "rgb(38, 50, 56)",
  },
  footerText: {
    color: "#ffff",
    fontSize: 18,
    fontWeight: "bold",
  },
  doView: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 20,
  },
  circle: {
    width: 10,
    height: 10,
    backgroundColor: "gray",
    borderRadius: 50,
    marginHorizontal: 5,
  },
});
