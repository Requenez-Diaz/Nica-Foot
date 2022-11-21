
import * as React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Marker, Callout, Circle} from 'react-native-maps'



export default function Maps() {
    const [pin, setPin] = React.useState({
        longitude: -84.45651111024087,
        latitude: 11.684712793063719,
    })

    return (
        <View style={styles.container}>
            <MapView style={styles.map}
                initialRegion={{
                    longitude: -84.45651111024087,
                    latitude: 11.684712793063719,
                    longitudeDelta: 23.4396,
                    latitudeDelta: 4.9668,
                }}
                provider="google"
            >
                <Marker
                    coordinate={pin}
                    pinColor='black'
                    draggable={true}
                    onDragStart={(e) => {
                        console.log("Start", e.nativeEvent.coordinate);
                    }}
                    onDragEnd={(e) => {
                        setPin({
                            longitude: e.nativeEvent.coordinate.longitude,
                            latitude: e.nativeEvent.coordinate.latitude,
                        })
                    }}
                >
                    <Callout>
                        <Text>Im here</Text>
                    </Callout>
                </Marker>
                <Circle
                center={pin} radius={1000}/>
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});