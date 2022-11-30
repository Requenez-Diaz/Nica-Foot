import React from 'react'
import { Text, View,  StyleSheet} from 'react-native'

import { MaterialIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

const IconSelect = () =>{
    return (
      <View style={styles.icons}>
        <View >
        <MaterialIcons name="add-box" size={24} color="gray" />
        </View>
        <View>
        <Fontisto name="favorite" size={24} color="gray" />
        </View>
        <View>
        <MaterialIcons name="favorite-border" size={24} color="gray" />
        </View>
      </View>
    )

}

export default IconSelect;

const styles = StyleSheet.create ({
    icons: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        paddingBottom: 10,
        margin: 10
    }
})