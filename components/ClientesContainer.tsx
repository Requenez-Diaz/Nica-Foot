import { Text, View } from 'react-native'
import Populares from './clientes/Populares'
import Recomendados from './clientes/Recomendados'
import Sesion from './clientes/Sesion'

const ClientesContainer = () => {
  return (
    <View>
      <Sesion/>
      <Populares/>
      <Recomendados/>
    </View>
  )
}

export default ClientesContainer