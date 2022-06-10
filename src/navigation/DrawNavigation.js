import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Setting from '../screens/Setting';
import CustomDrawer from '../navigation/CustomNavigation';
import TabNavigation from '../navigation/tabNavigation';
import  Icon  from 'react-native-vector-icons/FontAwesome'
import  Icon2  from 'react-native-vector-icons/Fontisto'
const Drawer = createDrawerNavigator();
const DrawNavigation = ()=>{
    return(
        <Drawer.Navigator drawerContent={props=><CustomDrawer {...props}/>}
        screenOptions={{headerTitleAlign:'center' , headerStyle: { backgroundColor: 'white', 
        }}}>
            <Drawer.Screen  name="Home" component={TabNavigation} options={{headerShown: false}}/>
            <Drawer.Screen  name="Profile" component={Profile} />
        </Drawer.Navigator>
    )
}

export default DrawNavigation;