import Search from "./Search";
import { View } from "react-native";
import Index from './Index';
import RestaurantDescription from './RestaurantDescription';
import Description from "./Description";
import Category from "./Category";

const ContainerComponents = () => {
  return (
    <View>
      <View style={{backgroundColor: 'green'}}>
      <Search />
      <Index/>
      </View>
      <View style={{backgroundColor: 'pink', borderTopLeftRadius: 40, borderTopRightRadius: 40}}>
      <RestaurantDescription/>
      <Description/>
      <Category/>
      </View>
    </View>
  );
};
export default ContainerComponents;
