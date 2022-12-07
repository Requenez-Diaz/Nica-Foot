import React from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

interface Props {
    ownerAvatarUrl: string;
    name: string;
    follow: number;
    stores: number;
}
const Header = ({ ownerAvatarUrl, name, follow, stores }: Props) => {
    return (
        <View>
            <View style={{ paddingBottom: 6, flexDirection: 'row' }}>
                <View style={{ paddingRight: 10 }}>
                    <Image
                        style={styles.image}
                        source={{ uri: ownerAvatarUrl }}
                    />
                </View>
                <View style={{ flex: 1 }}>
                    <Text>{name}</Text>
                    <View style={{ flexDirection: 'row', alignContent: 'center', alignItems: 'center' }}>
                        <SimpleLineIcons
                            name="user-following"
                            size={24}
                            color="black"
                            style={styles.icon}
                        />
                        <Text style={{ margin: 6 }}>{follow}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignContent: 'center', alignItems: 'center' }}>
                        <MaterialIcons
                            name="storefront"
                            size={24}
                            color="black"
                            style={styles.icon}
                        />
                        <Text style={{ margin: 6 }}>{stores}</Text>
                    </View>
                </View>
                <View style={{ justifyContent: 'space-evenly' }}>
                    <TouchableOpacity
                        style={{
                            width: 66,
                            height: 30,
                            backgroundColor: "skyblue",
                            alignContent: "center",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: 4,
                            borderColor: "white",
                            borderWidth: 1,
                        }}
                    >
                        <Text style={{ fontSize: 15 }}>Seguir</Text>
                    </TouchableOpacity>
                </View>
            </View>



        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 5,
        paddingTop: 5,
        paddingVertical: 5
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 50
    },
    icon: {

    }
})
