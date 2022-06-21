import React, {useContext} from 'react';
import {Text, View, Touchable, TouchableOpacity, FlatList, Image, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import {AuthContext} from '../components/context';
import Slider from '../components/Slider'
import  Icon  from 'react-native-vector-icons/AntDesign'
import DemoClass from '../components/DemoClass';
import AllCourses from '../components/AllCourses';
import AllClasses from '../components/AllClasses';
import AllTeachers from '../components/AllTeachers';
import AboutUs from '../components/AboutUs';
import ContactUs from '../components/Contactus.js';
import Clients from '../components/Clients';
import Styles from '../style/style';
const Home = ({navigation})=>{
    const {signOut} = useContext(AuthContext) 

    const banner = [{id:1,src:"https://www.thegyanias.com/_next/image?url=%2Fassets%2Fimages%2Fstudent.jpg&w=640&q=75"},{id:2,src:"https://www.thegyanias.com/_next/image?url=%2Fassets%2Fimages%2Fstudent.jpg&w=640&q=75"},{id:3,src:"https://www.thegyanias.com/_next/image?url=%2Fassets%2Fimages%2Fstudent.jpg&w=640&q=75"}];

 

    return (
        <ScrollView style={Styles.container}>
        {/* Slider */}
          <Slider banner={banner}/>

          {/* Demo Classes */}
          <DemoClass />
          {/* Course Classes */}
          <AllCourses />
          {/* Classes Classes */}
          <AllClasses />

          {/* Top Teacher */}
           <AllTeachers />
        
          {/* About US*/}
          <AboutUs />

          {/* What Our Clients Say */}
          <Clients />
       
       
        </ScrollView>     
)

}

export default Home
