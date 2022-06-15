import React, {useContext} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Category from '../screens/Category';
import Course from '../screens/Course';
import Notes from '../screens/Notes';
import Syllabus from '../screens/Syllabus';
import Setting from '../screens/Setting';
import CustomDrawer from '../navigation/CustomNavigation';
import TabNavigation from '../navigation/tabNavigation';
import  Icon  from 'react-native-vector-icons/FontAwesome'
import  Icon2  from 'react-native-vector-icons/Fontisto'
import LogoTitle from '../screens/LogoTitle';
import {AuthContext} from '../components/context';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
const Drawer = createDrawerNavigator();
 

const CourseDrawNavigation = ({ navigation, route, options })=>{
    const {signOut} = useContext(AuthContext);

    return(
        <Drawer.Navigator  drawerContent={props=><CustomDrawer {...props}/>}
        screenOptions={{headerTitleAlign:'center' , headerStyle: { backgroundColor: 'white', 
        }}}>

            <Drawer.Screen  name="Home" component={Home} options={{headerShown: true, drawerIcon:({color})=>(
                    <Icon name="home" size={20} color="black"/>   
            ),title:"home" , headerTitle: props => <LogoTitle {...props} /> }}/>

            <Drawer.Screen  name="Profile" component={Profile} options={({route}) =>({headerShown: true, drawerIcon:({color})=>(
                    <Icon2 name="person" size={20} color="black"/>   
            ), headerTitle: props => <LogoTitle {...props} />})}/>

            <Drawer.Screen  name="Category" component={Category} options={{headerShown: true, drawerIcon:({color})=>(
                    <Icon2 name="person" size={20} color="black"/>   
            ), headerTitle: props => <LogoTitle {...props} />}}/>

            <Drawer.Screen  name="Course" component={Course} options={{headerShown: true, drawerIcon:({color})=>(
                    <Icon2 name="person" size={20} color="black"/>   
            ), headerTitle: props => <LogoTitle {...props} />}}/>

            <Drawer.Screen  name="Notes" component={Notes} options={{headerShown: true, drawerIcon:({color})=>(
                    <Icon2 name="person" size={20} color="black"/>   
            ), headerTitle: props => <LogoTitle {...props} />}}/>

            <Drawer.Screen  name="Syllabus" component={Syllabus} options={{headerShown: true, drawerIcon:({color})=>(
                    <Icon2 name="person" size={20} color="black"/>   
            ), headerTitle: props => <LogoTitle {...props} />}}/>

            <Drawer.Screen  name="Setting" component={Setting} options={{headerShown: true, drawerIcon:({color})=>(
                    <Icon2 name="person" size={20} color="black"/>   
            ), headerTitle: props => <LogoTitle {...props} />}}/>

        </Drawer.Navigator>
    )
}

export default CourseDrawNavigation;