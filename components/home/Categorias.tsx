import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

interface Props {
    image: {},
}

const Categorias = ({ image }: Props) => {
    return (
        <View style={styles.container}>
            <Image
                source={image} style={styles.avatar}
            />
        </View>
    )
}

export default Categorias

const styles = StyleSheet.create({
    container: {
        width: 200,
        height: 200,
        borderRadius: 20,
    },
    avatar: {
        width: 140,
        height: 140,
        borderRadius: 70,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    }
})