import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

const IconsBar = () => { 

    return (
      <View>
        <TouchableOpacity
        style={styles.boton}
        >
            <Text>Edit Inventario</Text>
        </TouchableOpacity>
        <View>

        </View>
      </View>
    )

}

export default IconsBar

const styles = StyleSheet.create({
    boton: {
        backgroundColor: 'orange',
        width: 70,
        height: 30,
        
    }
})