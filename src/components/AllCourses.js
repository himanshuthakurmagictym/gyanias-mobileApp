import { View, Text, StyleSheet, FlatList, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import Course from './Single/SingleCourse';
import  Icon  from 'react-native-vector-icons/AntDesign';
import APIs from '../../config'
import styles from '../style/style'
const AllCourses = () => {
    const [classes, setDemoClass] = useState("");
    const [Isloading, setIsloading] = useState(true);
    useEffect(()=>{
        const getDemo = async()=>{
        try {
        const res = await fetch(`${APIs.base_url}demodetails/all`)
        const coursesapi = await res.json()
        setDemoClass(coursesapi.data);
        }catch (error) {
            console.error(error);
          } finally {
            setIsloading(false);
          }
        }
         getDemo();
    },[]);

    if( Isloading){
        return(
            <View style={styles.isloading}>
                <ActivityIndicator size="large"/>
            </View>
        )
        }
    
  return (
    <View style={styles.demoClass}>
    <View style={styles.DemoClassHeadingContainer}>
    <Text style={[styles.DemoClassHeading,{fontSize:15, }]}> {'Courses'.toUpperCase()}</Text>
    <Text style={styles.DemoClassHeading}>All Course <Icon name="right" size={16} /></Text>
    </View>
        <FlatList 
            data={classes}
            horizontal
            decelerationRate={'fast'}
            renderItem={({item})=>(
               <Course course={item}/>
            )}
  />
  </View>
  )
}

export default AllCourses
