import React from 'react'
import {TouchableOpacity, Alert} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Setting from '../screens/Setting';
import LogoTitle from '../screens/LogoTitle';
import  Icon  from 'react-native-vector-icons/FontAwesome'
import  Icon2  from 'react-native-vector-icons/Fontisto'
import  Icon3  from 'react-native-vector-icons/AntDesign'
import Course from '../screens/Course';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import HomeStack from './HomeStack';

const Tab = createBottomTabNavigator();
const TabNavigation = ({ navigation, route, options })=>{

   
    function getHeaderTitle(route) {
        console.log(route)
        const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';
        switch (routeName) {
          case 'Course':
            return 'Course';
        }
      } 

    React.useLayoutEffect(() => {
    navigation.setOptions({  title: getHeaderTitle(route)  });
  }, [navigation, route]);
  
    return(
       
        <Tab.Navigator  screenOptions={{
            tabBarStyle:{backgroundColor:"#007bff"}, tabBarActiveTintColor:'white', tabBarInactiveTintColor:'white', headerTitleAlign:'center', tabBarShowLabel:false
        }}>     
        <Tab.Screen name="home" component={Home} options={({route}) =>({tabBarIcon: ({color, size})=>(
            <Icon name="home" size={24} color='#fff' />
            ), headerTitle: props => <LogoTitle {...props} />, headerShown: false,})} 
        />   
        <Tab.Screen name="Course" component={Course} options={{tabBarIcon: ({color, size})=>(
            <Icon2 name="person" size={24} color='#fff' />
        ), headerTitle: props => <LogoTitle {...props} />, headerShown: false}}/>
        
        <Tab.Screen name="toggleDrawer"  component={Course} options={{tabBarIcon: ({color, size})=>(
            <Icon3 name="menufold" size={24} color='#fff' />
         ), headerTitle: props => <LogoTitle {...props} />, tabBarButton: props => (
            <TouchableOpacity {...props} onPress={() => navigation.toggleDrawer()} />
          ),}}/>
    </Tab.Navigator>
    )
}



export default TabNavigation;