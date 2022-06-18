import { View, Text, StyleSheet, FlatList, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import Review from './Single/Review';
import  Icon  from 'react-native-vector-icons/AntDesign';
import APIs from '../../config'
import styles from '../style/style'
const Clients = () => {
    const [classes, setDemoClass] = useState("");
    const [Isloading, setIsloading] = useState(true);
    // useEffect(()=>{
    //     const getDemo = async()=>{
    //     try {
    //     const res = await fetch(`${APIs.base_url}demodetails/all`)
    //     const coursesapi = await res.json()
    //     setDemoClass(coursesapi.data);
    //     }catch (error) {
    //         console.error(error);
    //       } finally {
    //         setIsloading(false);
    //       }
    //     }
    //      getDemo();
    // },[]);

    // if( Isloading){
    //     return(
    //         <View style={styles.isloading}>
    //             <ActivityIndicator size="large"/>
    //         </View>
    //     )
    //     }

    const Clients = [{id:1,name:"Rahul", position:"Web Developer", profile:"https://www.thegyanias.com/_next/image?url=%2Fassets%2Fimages%2Fface1.jpg&w=640&q=75", review:"Start preparing for exams, achieve more and have a stress-free life with Gyanias. Our courses are designed to empower individuals and professionals to achieve more in life, thereby making Gyanias an education revolution."},{id:2,name:"Rahul", position:"Web Developer",review:"Start preparing for exams, achieve more and have a stress-free life with Gyanias. Our courses are designed to empower individuals and professionals to achieve more in life, thereby making Gyanias an education revolution.", Profile:"https://www.thegyanias.com/_next/image?url=%2Fassets%2Fimages%2Fface1.jpg&w=640&q=75"},{id:3,name:"Rahul", position:"Web Developer",review:"Start preparing for exams, achieve more and have a stress-free life with Gyanias. Our courses are designed to empower individuals and professionals to achieve more in life, thereby making Gyanias an education revolution.", profile:"https://www.thegyanias.com/_next/image?url=%2Fassets%2Fimages%2Fface1.jpg&w=640&q=75"} ]
    
  return (
    <View style={styles.demoClass}>
    <View style={styles.DemoClassHeadingContainer}>
    <Text style={[styles.DemoClassHeading,{fontSize:15, }]}> {'Reviews'.toUpperCase()}</Text>
    <Text style={styles.DemoClassHeading}>All Reviews <Icon name="right" size={16} /></Text>
    </View>
        <FlatList 
            data={Clients}
            horizontal
            decelerationRate={'fast'}
            renderItem={({item})=>(
               <Review reviewsData={item}/>
            )}
  />
  </View>
  )
}

export default Clients