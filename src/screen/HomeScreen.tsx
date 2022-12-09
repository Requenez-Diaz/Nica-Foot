import React from "react";
import HomeExport from "../../components/HomeExport";
import { View, ScrollView } from "react-native";

const HomeScreen = () => {
  return (
    <ScrollView>
      <View>
        <HomeExport />
      </View>
    </ScrollView>
  );
};
export default HomeScreen;
