import React from "react";
import { View, Text, StyleSheet } from 'react-native';
//Import Icons
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons'; 


const RestaurantDescription = () => {

    return (

        <View style={styles.container}>
            <View>
                <Text style={styles.txt}>Bar la toña</Text>
                <View
                    style={styles.count}>
                    <Feather name="phone-call" size={24} color="black" />
                    <Text style={styles.txt1}>+505 8646 9676</Text>
                </View>
                <View style={styles.count} >
                    <MaterialCommunityIcons name="google-maps" size={24} color="black" />
                    <Text style={styles.txt1}>Nueva Guinea</Text>
                </View>
                <View style={styles.count} >
                    <FontAwesome5 name="facebook" size={24} color="black" />
                    <Text style={styles.txt1}>BarlaToña</Text>
                </View>
            </View>
        </View>
    )
}

export default RestaurantDescription;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
    },
    txt: {
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold'

    },
    txt1: {
        fontSize: 20,
        fontWeight: 'normal',
        marginLeft: 15,
        color: 'gray'
    },
    count: {
        flex: 1,
        flexDirection: 'row',
    }
})