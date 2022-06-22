import { View, Text, StyleSheet, FlatList, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import Course from './Single/SingleCourse';
import  Icon  from 'react-native-vector-icons/AntDesign';
import APIs from '../../config'
import useGlobalStyles from '../style/style'
const AllCourses = () => {
    const Styles = useGlobalStyles();
    const [classes, setDemoClass] = useState("");
    const [Isloading, setIsloading] = useState(true);
    useEffect(()=>{
        const getDemo = async()=>{
          const res = await fetch(`${APIs.base_url}demodetails/all`).then(res=>res.json()).then(res=> setDemoClass(res.data)).catch(err=>console.log(err)).done( setIsloading(false))
        }
         getDemo();
    },[]);

    if( Isloading){
        return(
            <View style={Styles.isloading}>
                <ActivityIndicator size="large"/>
            </View>
        )
        }
    
  return (
    <View style={Styles.demoClass}>
    <View style={Styles.DemoClassHeadingContainer}>
    <Text style={[Styles.DemoClassHeading,{fontSize:15, }]}> {'Courses'.toUpperCase()}</Text>
    <Text style={Styles.DemoClassHeading}>All Course <Icon name="right" size={16} /></Text>
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
