import React, {useContext} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Setting from '../screens/Setting';
import CustomDrawer from '../navigation/CustomNavigation';
import TabNavigation from '../navigation/tabNavigation';
import  Icon  from 'react-native-vector-icons/FontAwesome'
import  Icon2  from 'react-native-vector-icons/Fontisto'
import LogoTitle from '../screens/LogoTitle';
import {AuthContext} from '../components/context';
const Drawer = createDrawerNavigator();
  

const DrawNavigation = ()=>{
    const {signOut} = useContext(AuthContext) 
    return(
        <Drawer.Navigator drawerContent={props=><CustomDrawer {...props}/>}
        screenOptions={{headerTitleAlign:'center' , headerStyle: { backgroundColor: 'white', 
        }}}>
            <Drawer.Screen  name="Home" component={TabNavigation} options={{headerShown: false, drawerIcon:({color})=>(
                    <Icon name="home" size={20} color="black"/>   
            ), headerTitle: props => <LogoTitle {...props} />}}/>
            <Drawer.Screen  name="Profile" component={Profile} options={{ drawerIcon:({color})=>(
                    <Icon2 name="person" size={20} color="black"/>   
            ), headerTitle: props => <LogoTitle {...props} />}}/>
           
           
        </Drawer.Navigator>
    )
}

export default DrawNavigation;