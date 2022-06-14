import React, {useContext} from 'react'
import {View, Text, ImageBackground, Image} from 'react-native'
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import  Icon  from 'react-native-vector-icons/FontAwesome'
import  Icon2  from 'react-native-vector-icons/Fontisto'
import LinearGradient from 'react-native-linear-gradient';
import {AuthContext} from '../components/context';
const CustomNavigation = (props)=>{
  const {signOut} = useContext(AuthContext) 
    return(
      <View style={{flex:1}}>
      
          <LinearGradient colors={['#007bff', '#007bbb']} style={{flex:1, justifyContent:'center', alignItems:'center'}}>
           <Image source={require('../../assets/img/profile.png')} style={{width:100, height:100}}></Image>
           <Text style={{color:'white', fontWeight:'800'}}>Krishan Saini</Text>
           <Text style={{color:'white'}}>krishan@magictym.com</Text>
          </LinearGradient>

      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor:"white"}} style={{flex:1}}>
       
          <DrawerItemList {...props}/>
          {/* <DrawerItem label="Logout" onPress={() => signOut()}  /> */}
      </DrawerContentScrollView>
      <View style={{flex:1, }}>
       
      </View>
      </View>
    )
}

export default CustomNavigation;