import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import Clientes from '../../data/Clientes'
import ItemHeader from './ItemHeader'

const HeaderList = () => {
    

    return (
        <FlatList
            data={Clientes}
            ItemSeparatorComponent={() => <Text> </Text>}
            renderItem={({ item: clien }) => <ItemHeader {...clien} />}
        />
    )
}

export default HeaderList

const styles = StyleSheet.create({})