import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import TendenciasProps from './TendenciasProps'

const Tendencias = () => {
  return (
    <View>
      <TendenciasProps title='Hola' img={'https://www.recetasderechupete.com/wp-content/uploads/2021/04/Corn-Chowder-1.jpg'}/>
    </View>
  )
}

export default Tendencias

const styles = StyleSheet.create({})