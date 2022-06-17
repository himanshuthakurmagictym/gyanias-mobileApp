import { View, Text, StyleSheet, FlatList, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import Class from './SingleDemoClass';
import  Icon  from 'react-native-vector-icons/AntDesign';
import APIs from '../../config'
const DemoClass = () => {
    const [classes, setDemoClass] = useState("");
    const [Isloading, setIsloading] = useState(true);
    useEffect(()=>{
        const getDemo = async()=>{
        try {
        const res = await fetch(`${APIs.base_url}demodetails/all`)
        const democlass = await res.json()
        setDemoClass(democlass.data);
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
    

    // const classes = [{id:1,src:"https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/cleanarchitecture.jpg", },{id:2,src:"https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/cleanarchitecture.jpg"},{id:3,src:"https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/cleanarchitecture.jpg"}];

  return (
    <View style={styles.demoClass}>
    <View style={styles.DemoClassHeadingContainer}>
    <Text style={[styles.DemoClassHeading,{fontSize:15, }]}> {'Demo Classes'.toUpperCase()}</Text>
    <Text style={styles.DemoClassHeading}>All Class <Icon name="right" size={16} /></Text>
    </View>
        <FlatList 
            data={classes}
            horizontal
            decelerationRate={'fast'}
            renderItem={({item})=>(
               <Class classes={item}/>
            )}
  />
  </View>
  )
}

export default DemoClass
const styles = StyleSheet.create({
    demoClass:{
      flex:1,
      marginVertical:10,
    },
    DemoClassHeadingContainer:{
      justifyContent:'space-between',
      marginHorizontal:10,
      flexDirection:"row",
    },
    DemoClassHeading:{
      fontSize:16,
      fontWeight:"bold",
      color:"black",
      
    }
  
  })