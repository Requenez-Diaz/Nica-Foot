import react from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const AuthStack = createNativeStackNavigator();

export default () => (
    <NavigationContainer>
        <AuthStack.Navigator>
            <AuthStack.Screen name="AuthStack" component={AuthStack} />
        </AuthStack.Navigator>
    </NavigationContainer>
)