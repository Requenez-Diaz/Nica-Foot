import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

const Recomendados = () => {
    return (
        <View>
            <View style={styles.content}>
                <Text style={styles.text}>Los mas recomendados</Text>
                <Text style={styles.text}>Mas</Text>
            </View>
            <View>
                
            </View>
        </View>
    )
}
export default Recomendados;

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 10
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    }

})