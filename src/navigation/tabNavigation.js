import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Setting from '../screens/Setting';
import  Icon  from 'react-native-vector-icons/FontAwesome'
import  Icon2  from 'react-native-vector-icons/Fontisto'
const Tab = createBottomTabNavigator();
const TabNavigation = ()=>{
    return(
        <Tab.Navigator screenOptions={{
            tabBarStyle:{backgroundColor:"#000c82"}, headerTitleAlign:'center'
        }}>     
        <Tab.Screen name="Welcome" component={Home} options={{tabBarIcon: ({color, size})=>(
            <Icon name="home" size={24} color='#fff' />
    )}} />   
        <Tab.Screen name="Profile" component={Profile} options={{tabBarIcon: ({color, size})=>(
            <Icon2 name="person" size={24} color='#fff' />
    )}}/>
        <Tab.Screen name="setting" component={Setting} options={{tabBarIcon: ({color, size})=>(
            <Icon2 name="player-settings" size={24} color='#fff' />
    )}}/>
    </Tab.Navigator>
    )
}

export default TabNavigation;