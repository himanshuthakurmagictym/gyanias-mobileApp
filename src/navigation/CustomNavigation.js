import React, {useContext} from 'react'
import {View, Text, ImageBackground, Image, TouchableOpacity} from 'react-native'
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons'
import  Icon2  from 'react-native-vector-icons/Fontisto'
import LinearGradient from 'react-native-linear-gradient';
import {AuthContext} from '../components/context';
import useGlobalStyles from '../style/style'
const CustomNavigation = (props)=>{
  const {signOut} = useContext(AuthContext) 
  const Styles = useGlobalStyles();
    return(
      <View style={{flex:1}}>
       <View style={{flex:3}}>
          <LinearGradient colors={['#007bff', '#007bbb']} style={{flex:1, justifyContent:'center', alignItems:'center'}}>
           <Image source={require('../../assets/img/profile.png')} style={{width:100, height:100}}></Image>
           <Text style={{color:'white', fontWeight:'800'}}>Krishan Saini</Text>
           <Text style={{color:'white'}}>krishan@magictym.com</Text>
          </LinearGradient>
        </View>
      <View style={{flex:5}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor:"white"}} >
       
          <DrawerItemList {...props}/>
          {/* <DrawerItem label="Logout" onPress={() => signOut()}  /> */}
          
      </DrawerContentScrollView>
      </View>
      <View style={{flex:1, justifyContent:'flex-end'}}>
          <TouchableOpacity onPress={()=>{signOut()}} style={{flexDirection:"row", paddingLeft:20, paddingBottom:20, alignItems:"center"}} >
            <Icon name="logout" size={24} color='black' />
            <Text style={Styles.textPlaceholder}>Logout</Text>
          </TouchableOpacity>
      </View>
      </View>
    )
}

export default CustomNavigation;