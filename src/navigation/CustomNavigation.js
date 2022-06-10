import React from 'react'
import {View} from 'react-native'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import  Icon  from 'react-native-vector-icons/FontAwesome'
import  Icon2  from 'react-native-vector-icons/Fontisto'

const CustomNavigation = (props)=>{
    return(
      <DrawerContentScrollView>
        <DrawerItemList {...props}/>
      </DrawerContentScrollView>
    )
}

export default CustomNavigation;