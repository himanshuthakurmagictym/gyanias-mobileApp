import { View, Text, StyleSheet, FlatList, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import Teachers from './Single/Teacher';
import  Icon  from 'react-native-vector-icons/AntDesign';
import APIs from '../../config'
import useGlobalStyles from '../style/style'
const AllTeachers = () => {
    const [classes, setDemoClass] = useState("");
    const [Isloading, setIsloading] = useState(true);
    const Styles = useGlobalStyles();
    // useEffect(()=>{
    //     const getDemo = async()=>{
      // const res = await fetch(`${APIs.base_url}demodetails/all`).then(res=>res.json()).then(res=> setDemoClass(res.data)).catch(err=>console.log(err)).done( setIsloading(false))
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

    const teachers = [{id:1,teacherName:"Rahul", Position:"Web Developer", Profile:"https://www.thegyanias.com/_next/image?url=%2Fassets%2Fimages%2Fface1.jpg&w=640&q=75"},{id:2,teacherName:"Rahul", Position:"Web Developer", Profile:"https://www.thegyanias.com/_next/image?url=%2Fassets%2Fimages%2Fface1.jpg&w=640&q=75"},{id:3,teacherName:"Rahul", Position:"Web Developer", Profile:"https://www.thegyanias.com/_next/image?url=%2Fassets%2Fimages%2Fface1.jpg&w=640&q=75"} ]
    
  return (
    <View style={Styles.demoClass}>
    <View style={Styles.DemoClassHeadingContainer}>
    <Text style={[Styles.DemoClassHeading,{fontSize:15, }]}> {'Teachers'.toUpperCase()}</Text>
    <Text style={Styles.DemoClassHeading}>All Teachers <Icon name="right" size={16} /></Text>
    </View>
        <FlatList 
            data={teachers}
            horizontal
            decelerationRate={'fast'}
            renderItem={({item})=>(
               <Teachers TeacherData={item}/>
            )}
  />
  </View>
  )
}

export default AllTeachers