import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

interface Props {
    avatar: {},
    name: string
}


const TendenImg = ({ avatar, name }: Props) => {
    return (
        <View style={styles.container}>
            <Image
                source={avatar} style={styles.img}
            />
            <Text style={styles.name}>{name}</Text>
        </View>
    )
}

export default TendenImg

const styles = StyleSheet.create({
    container: {
        width: 120,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 5,
    },
    name: {
        fontSize: 15,
        fontWeight: "400",
        textAlign: "center"
    }
})