import React, {useContext} from 'react';
import {Text, View, Touchable, TouchableOpacity, FlatList, Image} from 'react-native';
import {AuthContext} from '../components/context';
import Slider from '../components/Slider'
const Home = ({navigation})=>{
    const {signOut} = useContext(AuthContext) 

    const banner = [{id:1,src:"https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/cleanarchitecture.jpg"},{id:2,src:"https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/cleanarchitecture.jpg"},{id:3,src:"https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/cleanarchitecture.jpg"}]

    return (
        <>
        {/* Slider */}
          <Slider banner={banner}/>
           
        {/* Top Teacher */}
         {/* Demo Classes */}
          {/* About US
           */}
        {/* What Our Clients Say */}
        {/* Contact Us */}

        </>     
)

}

export default Home