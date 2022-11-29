
import { View, Text, StyleSheet, TouchableOpacity, } from 'react-native'


const Credentials = () => {
    return (
        <View style={styles.container}>
            <View style={styles.item}>
                <Text style={styles.txt}>Email</Text>
                <Text style={styles.txt}>alfredorequenez57libra@gmail.com</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.txt}>Phone Number</Text>
                <Text style={styles.txt}>86469676</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.txt}>Fecha Registro</Text>
                <Text style={styles.txt}>23/11/2022</Text>
            </View>
            <View style={styles.container3}>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => {
                        console.log('clicked')
                    }}
                >
                    <Text style={{ fontSize: 20, color: 'yellow' }}
                    >
                        Log Out
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
//https://youtu.be/ALnJLbjI7EY
export default Credentials;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
    },
    item: {
        alignItems: 'center',
        margin: 7
    },
    txt: {
        color: 'white',
        marginTop: 10,
        fontWeight: 'bold',
        fontSize: 20,
    },
    container3: {
        alignItems: 'center',
        padding: 20,
        paddingHorizontal: 20,
    },
    btn: {
        backgroundColor: 'skyblue',
        height: 40,
        width: 100,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',

    }
});