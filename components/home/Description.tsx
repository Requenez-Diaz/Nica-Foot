import React from "react";
import { View, Text, StyleSheet } from "react-native"

export default function Description() {
    return (
        <View style={styles.container}>
            <Text style={styles.description}>
                Somos los mejores en brindar servicios, elecciones a tu dispocicion, deleitate
                con los mejores manjares.
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",

    },
    description: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 20,
        marginTop: 20,
        textAlign: "center",
        textAlignVertical: "center",
    }
})