import { View, Text, ScrollView, Dimensions } from 'react-native';
import React from 'react';
import getGlobaleStyle from "../style/style";
import Video from 'react-native-video';
const DemoDetails = ({route, navigation}) => {
  const {width, height} = Dimensions.get("screen");
  const { id } = route.params;
  const Styles =  getGlobaleStyle();
  return (
    <ScrollView style={Styles.container}>
      <View style={Styles.DemoVideo}>
     
        <Video source={{uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"}}
        controls={true}
        style={{width:width, height:height/3}}
        />
      </View>
     
      <Text style={Styles.DemoClassHeading}>DemoVideo Title</Text>
      <Text style={Styles.DemoClassDescription}>desc</Text>
   
    </ScrollView>
  )
}

export default DemoDetails