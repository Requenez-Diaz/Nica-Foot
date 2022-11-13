import ContainerComponents from './home/ContainerComponent';
import { View } from 'react-native';
import { ScrollView } from 'react-native';

const HomeExport = () => { 
    return (
        <ScrollView>
            <View>
                <ContainerComponents />
            </View>
        </ScrollView>
    )
}
export default HomeExport;