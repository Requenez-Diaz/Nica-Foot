import Search from "./Search";
import { ScrollView, View } from "react-native";
import Index from './Index';
import RestaurantDescription from './RestaurantDescription';
import Description from "./Description";
import Category from "./Category";
import MoreCat from "./MoreCat";
import ProductsCat from "./ProductsCat";

const ContainerComponents = () => {
  return (
      <View>
        <View style={{ backgroundColor: 'rgb(38, 50, 56)' }}>
          <Search />
          <Index />
        </View>
        <View style={{ backgroundColor: 'rgb(38, 50, 56)', opacity: 1 }}>
          <RestaurantDescription />
          <Description />
          <Category />
          <MoreCat/>
          <ProductsCat />
        </View>

      </View>
  );
};
export default ContainerComponents;
