import React, {useEffect} from 'react';
import { View, Text, SafeAreaView} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcomescreen from '../screens/Welcomescreen';
import Login from '../screens/Login';
import Registration from '../screens/Registration';
const Stack = createStackNavigator();
const Router = ()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator >
            <Stack.Screen name="Welcomescreen" component={Welcomescreen} options={{headerShown: false}}/>
            <Stack.Screen component={Login} name="Logins" options={{ title: 'Home' }}/>
            <Stack.Screen component={Registration} name="Registration" options={{ title: 'Home' }}/>
            </Stack.Navigator>
            </NavigationContainer>
    )
}

export default Router;
