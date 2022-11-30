
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Sesion = () => {
    return (
        <View >
            <View style={styles.container2} >
                <Text style={styles.text}>
                    Inicia secion y conectate con los clientes mas destacados
                </Text>
                <TouchableOpacity
                    style={styles.login}
                >
                    <Text style={styles.text}>INICIAR SESIÓN</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

export default Sesion;

const styles = StyleSheet.create({
    container2: {
        alignContent: "center",
        margin: 10,
        padding: 10,
        backgroundColor: "#ffa07a",
        borderRadius: 10,
        height: 120,
        alignItems: "center",
    },
    text: {
        fontSize: 15,
        color: "#ffff",
    },
    login: {
        width: 120,
        height: 40,
        backgroundColor: "skyblue",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        margin: 20
    }
})