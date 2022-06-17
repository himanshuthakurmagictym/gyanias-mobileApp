import { View, Text, Image } from 'react-native'
import React from 'react'
import APIs from '../../config'
const SingleDemoClass = ({classes}) => {
  return (
    <View style={{ alignItems:"center",}}>
      <Image source={{uri:APIs.base_url_home+classes.demoImage.replace(/\\/g,'\/')}} style={{ width:250, height:150, resizeMode:'stretch', borderRadius:10, margin:5 }}/>
      
      <Text numberOfLines={1} style={{fontWeight:"800", fontSize:16, color:"black", elevation: 100}}>{classes.demoTitle.substring(0,20)}</Text>
    </View>
  )
}

export default SingleDemoClass