import React, {useContext} from 'react';
import {Text, View, Touchable, TouchableOpacity, FlatList, Image} from 'react-native';
import {AuthContext} from '../components/context';
import Slider from '../components/Slider'
const Home = ({navigation})=>{
    const {signOut} = useContext(AuthContext) 

    const banner = [{id:1,src:"https://www.thegyanias.com/_next/image?url=%2Fassets%2Fimages%2Fstudent.jpg&w=640&q=75"},{id:2,src:"https://www.thegyanias.com/_next/image?url=%2Fassets%2Fimages%2Fstudent.jpg&w=640&q=75"},{id:3,src:"https://www.thegyanias.com/_next/image?url=%2Fassets%2Fimages%2Fstudent.jpg&w=640&q=75"}]

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