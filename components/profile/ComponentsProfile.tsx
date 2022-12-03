import React from "react";
import { View, ScrollView } from "react-native";
import ImageProfile from "./ImageProfile";
import Credentials from "./Crendentials";
import Buttons from "./Buttons";

const ComponentsProfile = () => {
  return (
    <ScrollView>
      <View>
        <ImageProfile />
        <Credentials />
        <Buttons />
      </View>
    </ScrollView>
  );
};
export default ComponentsProfile;
