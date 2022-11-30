import React from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native';

const Populares = () => {
    return (
        <View>
            <Text style={styles.text}> Clientes populares</Text>
            <ScrollView horizontal={true}>
                <View style={styles.container}>
                    <View style={styles.container2}>

                    </View>
                    <View style={styles.container2}>

                    </View>
                    <View style={styles.container2}>

                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Populares;

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 10
    },
    container: {
        flexDirection: "row",
        paddingTop: 5,
        marginLeft: 10,
    },
    container2: {
        margin: 10,
        backgroundColor: '#dcdcdc',
        width: 160,
        height: 160,
        borderRadius: 15,
    }
});


