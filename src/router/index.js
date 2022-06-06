import React, {useEffect} from 'react';
import { View, Text, SafeAreaView} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Welcomescreen from '../screens/Welcomescreen';
import Login from '../screens/Login';
const Stack = createNativeStackNavigator();
const Router = ()=>{
    return(
         <NavigationContainer>
                {/* <Welcomescreen /> */}
            <Stack.Navigator>
            <Stack.Screen name="Welcomescreens" component={Welcomescreen}/>
            <Stack.Screen component={Login} name="Logins" />
            </Stack.Navigator>
         </NavigationContainer> 
 
    )
}

export default Router;