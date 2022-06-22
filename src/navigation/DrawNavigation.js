import React, {useContext} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native'
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Category from '../screens/Category';
import Course from '../screens/Course';
import Notes from '../screens/Notes';
import Syllabus from '../screens/Syllabus';
import Support from '../screens/Support';
import Setting from '../screens/Setting';
import Aboutus from '../screens/Aboutus';
import CustomDrawer from '../navigation/CustomNavigation';
import TabNavigation from '../navigation/tabNavigation';
import  Icon  from 'react-native-vector-icons/FontAwesome'
import  Icon2  from 'react-native-vector-icons/Fontisto'
import  Icon3  from 'react-native-vector-icons/Feather'
import  Icon4  from 'react-native-vector-icons/MaterialIcons'
import  Icon5  from 'react-native-vector-icons/MaterialCommunityIcons'
import LogoTitle from '../screens/LogoTitle';
import {AuthContext} from '../components/context';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import HomeStack from './HomeStack';
const Drawer = createDrawerNavigator();
const DrawNavigation = ({ navigation, route, options })=>{
   
    const {signOut} = useContext(AuthContext);


//     headerTitle: props => <LogoTitle {...props} />,  headerRight:()=>(<TouchableOpacity onPress={()=>{navigation.navigate('Notification')}}  >
//             <Icon name="bell" color='#007bff' size={24}  style={{paddingRight:15}}/>
//             </TouchableOpacity>)
     
    return(
        <Drawer.Navigator initialRouteName="DrawerHome" drawerContent={props=><CustomDrawer {...props}/>}
        screenOptions={{headerTitleAlign:'center' , headerStyle: { backgroundColor: 'white', 
        }}}>
            <Drawer.Screen  name="DrawerHome"  component={TabNavigation} options={{unmountOnBlur: true,headerShown: false, drawerIcon:({color})=>(
                    <Icon name="home" size={20} color="black"/>   
            ),title:"Home" , headerTitle: props => <LogoTitle {...props} />,  }}/>

            <Drawer.Screen  name="DrawerProfile" initialParams={{  name: "Profile" }} component={HomeStack} options={({navigation }) =>({headerShown: false, drawerIcon:({color})=>(
                    <Icon5 name="face-man-profile" size={20} color="black"/>   
            ), title:"Profile", })}/>

            <Drawer.Screen  name="DrawerCategory"  initialParams={{  name: "Category" }} component={HomeStack} options={({navigation }) =>({headerShown: false, drawerIcon:({color})=>(
                    <Icon4 name="category" size={20} color="black"/>   
            ), title:"Category", })}/>

            <Drawer.Screen  name="DrawerCourse"  initialParams={{  name: "Course" }} component={HomeStack} options={({navigation }) =>({headerShown: false, drawerIcon:({color})=>(
                    <Icon3 name="book-open" size={20} color="black"/>   
            ), title:"Course",})}/>

            <Drawer.Screen  name="DrawerNotes" initialParams={{  name: "Notes" }}  component={HomeStack} options={({navigation }) =>({headerShown: false, drawerIcon:({color})=>(
                    <Icon name="bookmark" size={20} color="black"/>   
            ),title:"Notes", })}/>

            <Drawer.Screen  name="DrawerSyllabus" initialParams={{  name: "Syllabus" }} component={HomeStack} options={({navigation }) =>({headerShown: false, drawerIcon:({color})=>(
                    <Icon name="book" size={20} color="black"/>   
            ), title:"Syllabus", })}/>

            <Drawer.Screen  name="DrawerSetting" initialParams={{  name: "Setting" }} component={HomeStack} options={({navigation }) =>({headerShown: false, drawerIcon:({color})=>(
                    <Icon3 name="settings" size={20} color="black"/>   
            ), title:"Setting", })}/>

            <Drawer.Screen  name="DrawerAboutus" initialParams={{  name: "Aboutus" }} component={HomeStack} options={({navigation }) =>({headerShown: false, drawerIcon:({color})=>(
                    <Icon4 name="biotech" size={20} color="black"/>   
            ),  title:"Aboutus", })}/>

            <Drawer.Screen  name="DrawerSupport" initialParams={{  name: "Support" }} component={HomeStack} options={({navigation }) =>({headerShown: false, drawerIcon:({color})=>(
                    <Icon3 name="help-circle" size={20} color="black"/>   
            ), title:"Support", })}/>

        </Drawer.Navigator>
    )
}

export default DrawNavigation;