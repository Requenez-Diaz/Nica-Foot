import React from "react";
import CategoryProps from "./CategoryProps";
import { View } from 'react-native'

const Category = () => {
    return (
        <View>
            <CategoryProps
                nameCategory="Icecream"
                nameProduct="Helado"
                price={100}
                timeDuration={2}
            />
        </View>
    )
}
export default Category;