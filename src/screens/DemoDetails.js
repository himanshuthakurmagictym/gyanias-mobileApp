import { View, Text, ScrollView, Dimensions, Platform, StyleSheet, StatusBar, BackHandler } from 'react-native';
import React, { useEffect, useState, useRef } from 'react';
import getGlobaleStyle from "../style/style";
import APIs from '../../config';
import MediaControls, { PLAYER_STATES } from 'react-native-media-controls';
import Video from 'react-native-video';
import Orientation from 'react-native-orientation-locker';
import VideoPlayer from "../components/VideoPlayer"
const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;
const DemoDetails = ({route, navigation}) => {
  const [Democlass, setDemoClass] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const { id } = route.params;
  const Styles =  getGlobaleStyle();
  
  useEffect(()=>{
   
    const getDemo = async()=>{
    try{
      const res = await fetch(`${APIs.base_url}demodetails/${id}`);
      const datas = await res.json()
      setDemoClass(datas.data);
    }catch(error){
      console.error(error);
    }finally {
      setIsLoading(false);
    }
  }
  getDemo(); 

  const backHandler = BackHandler.addEventListener(
    "hardwareBackPress",
    backAction
  );
  return () => backHandler.remove();

  },[])


  const backAction = () => {
    navigation.goBack();
    Orientation.lockToPortrait();
    return true;
  }
  
 


  return (
    <ScrollView style={Styles.container}>
      <View style={Styles.DemoVideo}>
            <VideoPlayer navigation={navigation}/>
      </View>
     
      <Text style={Styles.DemoClassDetailHeading}>{Democlass.demoTitle?Democlass.demoTitle:"Video Description"}</Text>
      <Text style={Styles.DemoClassDetailDesc}>{Democlass.demodescription?Democlass.demodescription:"Video Description"}</Text>
      {/* <WebView
        source={{ html: "<p style='text-align: justify;'>We have the ability to build infinite way for us.</p>"}} 
      /> */}
    </ScrollView>
  )
}

export default DemoDetails