import { View, Text, StyleSheet, FlatList, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import ClassDemo from '../components/Single/SingleDemoClass';
import  Icon  from 'react-native-vector-icons/AntDesign';
import APIs from '../../config'
import useGlobalStyles from '../style/style'
const DemoClass = () => {
    const [classes, setDemoClass] = useState("");
    const [Isloading, setIsloading] = useState(true);
    const Styles = useGlobalStyles();
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
            <View style={Styles.isloading}>
                <ActivityIndicator size="large"/>
            </View>
        )
        }
    

    // const classes = [{id:1,src:"https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/cleanarchitecture.jpg", },{id:2,src:"https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/cleanarchitecture.jpg"},{id:3,src:"https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/cleanarchitecture.jpg"}];

  return (
    <View style={Styles.demoClass}>
    <View style={Styles.DemoClassHeadingContainer}>
    <Text style={[Styles.DemoClassHeading,{fontSize:15, }]}> {'Demo Classes'.toUpperCase()}</Text>
    <Text style={Styles.DemoClassHeading}>All Class <Icon name="right" size={16} /></Text>
    </View>
        <FlatList 
            data={classes}
            horizontal
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            decelerationRate={'fast'}
         
            renderItem={({item})=>(
               <ClassDemo classes={item}/>
            )}
        />
  </View>
  )
}

export default DemoClass
