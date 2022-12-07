import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './Header'
const ItemHeader = (Props) => {
  return (
    <View style={styles.container}>
        <Header {...Props} />
    </View>
  )
}

export default ItemHeader

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#dcdcdc',
        margin:10,
        padding: 15,
        borderRadius:7,
        paddingVertical: 5,
    }
})