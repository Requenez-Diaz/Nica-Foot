import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

const IconsBar = () => {

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.boton}
      >
        <Text style={styles.txt}>Edit Inventario</Text>
      </TouchableOpacity>
      <View style={styles.icon}>
        <AntDesign name="downcircle" size={24} color="black" />
      </View>
    </View>
  )

}

export default IconsBar

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: 20
  },
  boton: {
    backgroundColor: 'skyblue',
    width: 100,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  icon: {
    width: 40,
    height: 40,
    backgroundColor: 'gray',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5
  }
})