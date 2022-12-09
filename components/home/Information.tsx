import React from "react";
import { View, Text, StyleSheet } from 'react-native';
//Import Icons
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';


const Information = () => {

    return (
        <View>
            <Text style={styles.txt}>Bar la toña</Text>
            <View style={styles.Space}>
                <View
                    style={styles.count}>
                    <Feather name="phone-call" size={24} color="white" />
                    <Text style={styles.txt1}>+505 8646 9676</Text>
                </View>
                <View style={styles.count} >
                    <MaterialCommunityIcons name="google-maps" size={24} color="white" />
                    <Text style={styles.txt1}>Nueva Guinea</Text>
                </View>
                <View style={styles.count} >
                    <FontAwesome5 name="facebook" size={24} color="white" />
                    <Text style={styles.txt1}>BarlaToña</Text>
                </View>
            </View>
        </View>
    )
}

export default Information;

const styles = StyleSheet.create({
    txt: {
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white'
    },
    txt1: {
        fontSize: 20,
        fontWeight: 'normal',
        marginLeft: 15,
        color: 'white',
        margin: 2
    },
    count: {
        flex: 1,
        flexDirection: 'row',
    },
    Space: {
        flex: 1,
        margin: 10,
        paddingTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        paddingBottom: 10
    }
})