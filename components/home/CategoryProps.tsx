import react from 'react';
import { View, Text, StyleSheet} from 'react-native';
interface Props {
    nameCategory: string;
    nameProduct: string;
    price: number;
    timeDuration: number;
}

const CategoryProps = ({nameCategory, nameProduct, price, timeDuration}:Props) => {
    return (
        <View style={styles.content}>
            <Text style={styles.txt}>{nameCategory}</Text>
            <Text style={styles.txt}>{nameProduct}</Text>
            <Text style={styles.txt}>{price}</Text>
            <Text style={styles.txt}>{timeDuration}</Text>
        </View>
    )
}
export default CategoryProps;

const styles= StyleSheet.create({
    content :{
        flex: 1,
        // flexDirection: 'row',
        // justifyContent:'space-between',
        // alignItems: 'center'
    },
    txt: {
        color: 'black',
        fontSize: 16,
    }
})