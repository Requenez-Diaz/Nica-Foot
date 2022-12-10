import React from "react";
import { View, ScrollView} from "react-native";
import ComponentsProfile from "./profile/ComponentsProfile";

const ContainerProfile = () => {
  return (
    <ScrollView>
      <View style={{ backgroundColor: "rgb(38, 50, 56)" }}>
        <ComponentsProfile />
      </View>
    </ScrollView>
  );
};

export default ContainerProfile;
