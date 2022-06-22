import React from 'react'
import {TouchableOpacity, Alert, Text, Platform} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import SearchScreen from '../screens/SearchScreen';
import LogoTitle from '../screens/LogoTitle';
import  Icon  from 'react-native-vector-icons/FontAwesome'
import  Icon2  from 'react-native-vector-icons/Fontisto'
import  Icon3  from 'react-native-vector-icons/AntDesign'

import  Icon4 from 'react-native-vector-icons/Feather'
import Course from '../screens/Course';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import HomeStack from './HomeStack';
// import CourseStack from './CourseStack';
// import SearchScreenStack from './SearchScreenStack'

const Tab = createBottomTabNavigator();
const TabNavigation = ({ navigation, route, options })=>{

   
//     function getHeaderTitle(route) {
//         console.log(route)
//         const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';
//         switch (routeName) {
//           case 'Course':
//             return 'Course';
//         }
//       } 

//     React.useLayoutEffect(() => {
//     navigation.setOptions({  title: getHeaderTitle(route)  });
//   }, [navigation, route]);
  
// headerTitle: props => <LogoTitle {...props} />, headerShown: true, headerLeft:()=>(  <TouchableOpacity onPress={()=>{navigation.toggleDrawer()}} >
//             <Icon4 name="menu" size={24}  style={{paddingLeft:15}}/>
//             </TouchableOpacity>),  headerRight:()=>(
//             <>
//             <TouchableOpacity onPress={()=>{navigation?.navigate("Notification")}}  >
//             <Icon name="bell" color='#007bff' size={24}  style={{paddingRight:15}}/>
//             </TouchableOpacity> 
//             </>
//             ),


    return(
       
        <Tab.Navigator initialRouteName="TabHome" screenOptions={{
            tabBarStyle:{backgroundColor:"#007bff"}, tabBarActiveTintColor:'white', tabBarInactiveTintColor:'white', headerTitleAlign:'center', tabBarShowLabel:false,headerShown: false,
        }}>     
        <Tab.Screen name="TabHome"  initialParams={{ name: "Home" }} component={HomeStack} options={({route}) =>({tabBarIcon: ({color, size})=>(
            <Icon name="home" size={24} color='#fff' />
            ),title:"Home", })} 
        />  


        <Tab.Screen name="TabCourse" initialParams={{ name: "Course" }} component={HomeStack} options={({navigation }) =>({headerShown: false, tabBarIcon: ({color, size})=>(
            <Icon2 name="person" size={24} color='#fff' />
            ),title:"Course", })}/>
        
        <Tab.Screen name="TabSearch" initialParams={{  name: "Search" }} component={HomeStack} options={({navigation }) =>({headerShown: false, tabBarIcon: ({color, size})=>(
            <Icon3 name="search1" size={24} color='#fff' />
            ),title:"Serach", })}/>

        <Tab.Screen name="toggleDrawer"  component={Course} options={{tabBarIcon: ({color, size})=>(
            <Icon3 name="menufold" size={24} color='#fff' />
            ),title:"Toggle", headerTitle: props => <LogoTitle {...props} />, tabBarButton: props => (
            <TouchableOpacity {...props} onPress={() => navigation.toggleDrawer()} />
             )}}/>
    </Tab.Navigator>
    )
}



export default TabNavigation;