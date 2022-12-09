import ContainerComponents from "./home/ContainerComponent";
import { View } from "react-native";
import { ScrollView } from "react-native";

const HomeExport = () => {
  return (
    <ScrollView>
      <View style={{ backgroundColor: "rgb(38, 50, 56)" }}>
        <ContainerComponents />
      </View>
    </ScrollView>
  );
};
export default HomeExport;
