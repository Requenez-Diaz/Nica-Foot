
import { View, ScrollView } from "react-native";
import Information from "./Information"
import Description from "./Description";
import Category from "./Category";
import MoreCat from "./MoreCat";
import ProductsCat from "./ProductsCat";
import Tendencias from "./Tendencias";
import Header from "./Header";
import Presentation from "./Presentation";

const ContainerComponents = () => {
  return (
      <View>
        <Header />
        <Presentation />
        <Information />
        <Description />
        <Category />
        <MoreCat />
        <ProductsCat />
        <Tendencias />
      </View>
  );
};
export default ContainerComponents;
