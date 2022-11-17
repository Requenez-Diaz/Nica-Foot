import react from "react"
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Search = () => {
    return (
        <TextInput style={styles.container}>
            <View>
                <Ionicons name="search-outline" size={30} color="#ffff" />
                <Text>Search Here</Text>
            </View>
        </TextInput>
    )

}
export default Search;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
        padding: 12,
        marginTop:10,
        margin: 10,
        borderRadius: 10
    }
})