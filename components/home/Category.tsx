import react from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Category = () => {
    return (
        <View style={styles.container} >
            <Text style={styles.title}>Categorias</Text>
            <View>
                <View style={styles.imagen}>
                    <Text style={styles.txt}>Fritangas</Text>
                    <View>
                        <Image
                            source={{ uri: "https://assets.unileversolutions.com/recipes-v2/99420.png" }}
                            style={styles.img}
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}
export default Category

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        margin: 10
    },
    txt:{
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
    },
    imagen: {
        width: 250,
        height: 250,
        backgroundColor: '#FFFFFF',
        borderRadius: 25,
        alignItems: 'center',
    },
    img: {
        width: 200,
        height: 200,
        borderRadius: 50,
        margin: 10,
        paddingTop: 10,
    }
})
