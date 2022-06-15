import React from 'react'
import {View, Text} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Setting from '../screens/Setting';
import Profile from '../screens/Profile';
import Category from '../screens/Category';
import Course from '../screens/Course';
import Notes from '../screens/Notes';
import Syllabus from '../screens/Syllabus';




const Stack = createStackNavigator();
 const HomeStack = () => {
  return (
    <Stack.Navigator >
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Stack.Screen component={Profile} name="Profile" />
        <Stack.Screen component={Setting} name="Setting" />
        <Stack.Screen component={Category} name="Category" />
        <Stack.Screen component={Syllabus} name="Syllabus" />
        <Stack.Screen component={Notes} name="Notes" />
        <Stack.Screen component={Course} name="Course" />
    </Stack.Navigator>
  )
}

export default HomeStack