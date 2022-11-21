import React from "react";
import Slider from "./Slider";
import { View, StyleSheet, ScrollView } from 'react-native';

const Index = () => {
    return (
        <ScrollView>
            <View style={styles.op}>
                <Slider image={{ uri: "https://ep00.epimg.net/elpais/imagenes/2021/10/05/album/1633449011_402027_1633454467_album_normal.jpg" }} />
            </View >
        </ScrollView>
    )
}
export default Index;
const styles = StyleSheet.create({
    op: {
        flex: 1,
    }
})