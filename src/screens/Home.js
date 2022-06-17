import React, {useContext} from 'react';
import {Text, View, Touchable, TouchableOpacity, FlatList, Image, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import Class from '../components/SingleDemoClass';
import {AuthContext} from '../components/context';
import Slider from '../components/Slider'
import  Icon  from 'react-native-vector-icons/AntDesign'
import DemoClass from '../components/DemoClass';
import AllCourses from '../components/AllCourses';

const Home = ({navigation})=>{
    const {signOut} = useContext(AuthContext) 

    const banner = [{id:1,src:"https://www.thegyanias.com/_next/image?url=%2Fassets%2Fimages%2Fstudent.jpg&w=640&q=75"},{id:2,src:"https://www.thegyanias.com/_next/image?url=%2Fassets%2Fimages%2Fstudent.jpg&w=640&q=75"},{id:3,src:"https://www.thegyanias.com/_next/image?url=%2Fassets%2Fimages%2Fstudent.jpg&w=640&q=75"}];

 

    return (
        <ScrollView style={styles.container}>
        {/* Slider */}
          <Slider banner={banner}/>

          {/* Demo Classes */}
          <DemoClass />
          {/* Course Classes */}
          <AllCourses />
          {/* Classes Classes */}
          <DemoClass />

        {/* Top Teacher */}
          <DemoClass />
        
          {/* About US
           */}
        {/* What Our Clients Say */}
        {/* Contact Us */}
       
        </ScrollView>     
)

}

export default Home
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#edfafa"
  }
})