import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'
interface Props{
    title: string;
    img: {}
}

const TendenciasProps = ({title, img}: Props) => {
  return (
    <View>
        <View>
            <Text>{title} </Text>
            <Image
            source={img}
            style={styles.image}
            />
        </View>
        
    </View>
  )
}

export default TendenciasProps

const styles = StyleSheet.create({
    image:{
        width: 60,
        height: 60,
    }
})