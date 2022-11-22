import Search from "./Search";
import { ScrollView, View } from "react-native";
import Index from './Index';
import RestaurantDescription from './RestaurantDescription';
import Description from "./Description";
import Category from "./Category";

const ContainerComponents = () => {
  return (
    <ScrollView>
      <View>
        <View style={{ backgroundColor: 'green' }}>
          <Search />
          <Index />
        </View>
        <View style={{ backgroundColor: 'pink', borderTopLeftRadius: 40, borderTopRightRadius: 40 }}>
          <RestaurantDescription />
          <Description />
          <Category />
        </View>
      </View>

    </ScrollView>
  );
};
export default ContainerComponents;
