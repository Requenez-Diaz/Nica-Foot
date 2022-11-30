import { Text, View, ScrollView } from 'react-native'
import Populares from './clientes/Populares'
import Recomendados from './clientes/Recomendados'
import Sesion from './clientes/Sesion'

const ClientesContainer = () => {
  return (
    <ScrollView>
      <View>
        <Sesion />
        <Populares />
        <Recomendados />
      </View>
    </ScrollView>
  )

}

export default ClientesContainer