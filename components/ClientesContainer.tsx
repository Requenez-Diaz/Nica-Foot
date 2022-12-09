import { Text, View, ScrollView } from "react-native";
import Populares from "./clientes/Populares";
import Recomendados from "./clientes/Recomendados";
import Sesion from "./clientes/Sesion";
import HeaderList from "./clientes/HeaderList";

const ClientesContainer = () => {
  return (
    <View style={{ flex: 1 }}>
      <Sesion />
      <Populares />
      <HeaderList />
    </View>
  );
};

export default ClientesContainer;
