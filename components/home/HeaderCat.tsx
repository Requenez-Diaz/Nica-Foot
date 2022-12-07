import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
interface Props {
    title: string;
}

const HeaderCat = ({title}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>{title}</Text>
    </View>
  )
}

export default HeaderCat

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    txt: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    }
})