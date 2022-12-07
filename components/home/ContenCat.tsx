import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Categorias from './Categorias'
import HeaderCat from './HeaderCat'
import { Ionicons } from '@expo/vector-icons';

const ContenCat = () => {
    return (
        <View>
            <HeaderCat
                title='Categorias'
            />
            <View style={styles.contenedor}>
                <View style={styles.com}>
                    <Text style={styles.tex}>Fritangas</Text>
                    <Ionicons name="fast-food" size={24} color="black" />
                </View>
                <View style={styles.comida}>
                    <Categorias
                        image={{ uri: "https://www.cocinacaserayfacil.net/wp-content/uploads/2020/04/Recetas-de-comidas-para-ni%C3%B1os.jpg" }}
                    />
                    <TouchableOpacity>
                        <Text style={styles.Price}> Comprar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default ContenCat

const styles = StyleSheet.create({
    com: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        marginLeft: 15
    },
    tex: {
        fontSize: 16,
        margin: 10
    },
    contenedor: {
        backgroundColor: 'gray',
        width: 200,
    }, 
    comida: {
        alignItems: 'center',

    }
})