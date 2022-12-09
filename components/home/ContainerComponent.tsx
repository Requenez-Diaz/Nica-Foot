import Search from "./Search";
import { View, ScrollView } from "react-native";
import Index from "./Index";
import RestaurantDescription from "./RestaurantDescription";
import Description from "./Description";
import Category from "./Category";
import MoreCat from "./MoreCat";
import ProductsCat from "./ProductsCat";
import Tendencias from "./Tendencias";

const ContainerComponents = () => {
  return (
      <View>
        <Search />
        <Index />
        <RestaurantDescription />
        <Description />
        <Category />
        <MoreCat />
        <ProductsCat />
        <Tendencias />
      </View>
  );
};
export default ContainerComponents;
