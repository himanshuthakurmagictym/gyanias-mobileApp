import React from 'react'
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Setting from '../screens/Setting';
import Profile from '../screens/Profile';
import Category from '../screens/Category';
import Course from '../screens/Course';
import Notes from '../screens/Notes';
import Syllabus from '../screens/Syllabus';
import Search from '../screens/SearchScreen';
import Notification from '../screens/Notification';
import DemoDetails from '../screens/DemoDetails';
import Aboutus from '../screens/Aboutus';
import Support from '../screens/Support';
import  Icon  from 'react-native-vector-icons/FontAwesome'
import  Icon2  from 'react-native-vector-icons/Fontisto'
import  Icon3  from 'react-native-vector-icons/Feather'
import  Icon4  from 'react-native-vector-icons/MaterialIcons'
import  Icon5  from 'react-native-vector-icons/MaterialCommunityIcons'
import LogoTitle from '../screens/LogoTitle';
import { useNavigation, useTheme } from '@react-navigation/native';

const Stack = createStackNavigator();
 const HomeStack = ({route, navigation}) => {
  const {colors} = useTheme();

const options= ({navigation }) =>({headerTitle: props => <LogoTitle {...props} />, headerShown: true, headerLeft:()=>(<TouchableOpacity onPress={()=>{navigation.toggleDrawer()}} >
            <Icon4 name="menu" size={24}  style={{paddingLeft:15, color:colors.text}}/>
            </TouchableOpacity>),  headerRight:()=>(
            <>
            <TouchableOpacity onPress={()=>{navigation?.navigate("Notification")}}  >
            <Icon name="bell" color='#007bff' size={24}  style={{paddingRight:15}}/>
            </TouchableOpacity> 
            </>
            ),});
 
  return (
    <Stack.Navigator initialRouteName={route.params.name}>
        <Stack.Screen name="Home" component={Home} options={options} />
        <Stack.Screen component={Profile} name="Profile" options={options} />
        <Stack.Screen component={Setting} name="Setting" options={options}/>
        <Stack.Screen component={Category} name="Category" options={options}/>
        <Stack.Screen component={Syllabus} name="Syllabus" options={options}/>
        <Stack.Screen component={Notes} name="Notes" options={options} />
        <Stack.Screen component={Course} name="Course" options={options}/>
        <Stack.Screen component={Search} name="Search" options={options}/>
        <Stack.Screen component={Notification} name="Notification" options={options}/>
        <Stack.Screen component={Aboutus} name="Aboutus" options={options}/>
        <Stack.Screen component={Support} name="Support"options={options} />
        <Stack.Screen component={DemoDetails} name="DemoDetails" />
    </Stack.Navigator>
  )
}

export default HomeStack