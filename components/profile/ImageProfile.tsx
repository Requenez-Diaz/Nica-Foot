import React from "react";
import { View, Text, Image, StyleSheet, } from 'react-native';

const ImageProfile = () => {
    return (
        <View style={styles.container}>
            <View style={styles.container2}>
                <Image
                    source={{ uri: "https://i.pinimg.com/736x/d0/77/cc/d077ccbfeb90669918009c6854b5d6e2.jpg" }}
                    style={styles.image}
                />
            </View>
            <View style={styles.name}>
                <Text style={styles.name2}>
                    Avimilex Alfredo requenez
                </Text>
            </View>
        </View>
    )
}
export default ImageProfile;

const styles = StyleSheet.create({
    container: {
        padding: 20,
        margin: 10
    },
    container2: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 100
    },
    name: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
    },
    name2: {
        fontWeight: 'bold',
        fontSize: 20,
        fontStyle: 'italic',
        color: 'gray',
    }

})
