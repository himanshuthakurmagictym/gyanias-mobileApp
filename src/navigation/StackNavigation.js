import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcomescreen from '../screens/Welcomescreen';
import Login from '../screens/Login';
import Registration from '../screens/Registration';
import Home from '../screens/Home';
import Setting from '../screens/Setting';
import CustomDrawer from '../navigation/CustomNavigation';
import TabNavigation from '../navigation/tabNavigation';
import  Icon  from 'react-native-vector-icons/FontAwesome'
import  Icon2  from 'react-native-vector-icons/Fontisto'
const Stack = createStackNavigator();
const StackNavigation = ()=>{
    return(
        <Stack.Navigator >
                <Stack.Screen name="Welcomescreen" component={Welcomescreen} options={{headerShown: false}}/>
                <Stack.Screen component={Login} name="Logins" options={{ title: 'Home' }}/>
                <Stack.Screen component={Registration} name="Registration" options={{ title: 'Home' }}/>
                {/* <Stack.Screen component={TabNavigation} name="Home" options={{ title: 'Home' }}/> */}
        </Stack.Navigator>
    )
}

export default StackNavigation;