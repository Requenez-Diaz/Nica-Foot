import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";
interface Props {
  title: string;
}

const TendenciasProps = ({ title }: Props) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
          {title}
        </Text>
      </View>
      <View style={styles.container2}>
        <Text style={styles.mas}>Mas</Text>
      </View>
    </View>
  );
};

export default TendenciasProps;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 25,
    alignItems: "center",
  },
  container2: {
    marginTop: 10,
    flexDirection: "row",
  },
  mas: {
    fontSize: 20,
    fontWeight: "bold",
    marginRight: 10,
    color: "white",
  },
});
