import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View>
        <View style= {styles.container}>
            <Image
            style= {styles.img}
            source={{uri: "https://i0.wp.com/satelitenorte.com.mx/wp-content/uploads/2020/07/personalidad.jpg?fit=1200%2C930&ssl=1"}}
            />
            <Text style={{fontSize: 16, color: 'white'}}>Welcome Carlos</Text>
        </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent:'space-around',
        alignItems: 'center',
        margin: 10
    },
    img: {
        width: 50,
        height: 50,
        borderRadius: 25
    }
})