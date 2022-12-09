import React from "react";
import { View, Text, StyleSheet } from 'react-native';
//Import Icons
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { useState, useEffect } from 'react';
import { HttpClient } from "../../services/http.service";
import { ListInformationResponse } from "../../interfaces";

const information = new HttpClient();



const Information = () => {
    const [infor, setInfor] = useState<ListInformationResponse>({
        data: [],
        metadata: {
          nextPage: 1,
          currentPage: 1,
          perPage: 1,
        },
    });
    const getInformation = async () => {
        const response = await information.get<ListInformationResponse>("Information");
        setInfor(response);
      };
      useEffect(() => {
        getInformation();
      }, []);
    

    return (
        <View>
            {infor.data.map((information, index) => (
            <View style={styles.Space} key={index}>
                <Text style={styles.txt}>{information.namePlaces}</Text>
                <View
                    style={styles.count}>
                    <Feather name="phone-call" size={24} color="white" />
                    <Text style={styles.txt1}>{information.numberPhone}</Text>
                </View>
                <View style={styles.count} >
                    <MaterialCommunityIcons name="google-maps" size={24} color="white" />
                    <Text style={styles.txt1}>{information.places}</Text>
                </View>
                <View style={styles.count} >
                    <FontAwesome5 name="facebook" size={24} color="white" />
                    <Text style={styles.txt1}>{information.socialmedia}</Text>
                </View>
            </View>
               ))}
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