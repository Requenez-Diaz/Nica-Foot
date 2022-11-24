import react from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
const Category = () => {
    return (
        <ScrollView>
            <View>
                <Text style={styles.title}>Categorias</Text>
                <View style={styles.container}>
                    <View style={styles.imagen}>
                        <Text style={styles.txt}>Fritangas</Text>
                        <View style={styles.Icon}>
                            <Text style={styles.name}>
                                Enchiladas
                            </Text>
                            <Ionicons name="ios-star" size={24} color="yellow" />
                        </View>
                        <View style={styles.timer}>
                            <Ionicons name="timer-outline" size={20} color="gray"
                                style={{ margin: 5 }} />
                            <Text style={{ fontSize: 14, color: "gray" }}>20-45 mn</Text>
                        </View>
                        <View>
                            <Image
                                source={{ uri: "https://assets.unileversolutions.com/recipes-v2/99420.png" }}
                                style={styles.img}
                            />
                        </View>
                        <View>

                        </View>
                    </View>
                    <View style={styles.imagen}>
                        <Text style={styles.txt}>Fritangas</Text>
                        <View style={styles.Icon}>
                            <Text style={styles.name}>
                                Tacos
                            </Text>
                            <Ionicons name="ios-star" size={24} color="yellow" />
                        </View>
                        <View style={styles.timer}>
                            <Ionicons name="timer-outline" size={20} color="gray"
                                style={{ margin: 5 }} />
                            <Text style={{ fontSize: 14, color: "gray" }}>20-45 mn</Text>
                        </View>
                        <View>
                            <Image
                                source={{ uri: "https://assets.unileversolutions.com/recipes-v2/99420.png" }}
                                style={styles.img}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}
export default Category;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        padding: 10,
        flexDirection: 'row',
        paddingHorizontal: 10,
        margin: 10
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        margin: 10
    },
    txt: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
    },
    imagen: {
        width: 170,
        height: 270,
        backgroundColor: '#FFFFFF',
        borderRadius: 25,
        alignItems: 'center',
    },
    img: {
        width: 140,
        height: 140,
        borderRadius: 70,
        margin: 10,
        paddingTop: 10,
    },
    Icon: {
        flexDirection: 'row',
    },
    name: {
        fontSize: 15,
        margin: 5
    },
    timer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 40,
        backgroundColor: 'skyblue',
        borderRadius: 20,
        opacity: 2
    },
})
