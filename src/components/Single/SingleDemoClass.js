import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import useGlobalStyles from '../../style/style'
import APIs from '../../../config'
import { useNavigation, useTheme } from '@react-navigation/native';
const SingleDemoClass = ({classes}) => {
  const Styles = useGlobalStyles();
  const navigation = useNavigation(); 
  return (
    <TouchableOpacity onPress={()=> navigation.navigate("DemoDetails",{
      id : 45,
    })}>
    <View style={Styles.cardContainer} >
      <Image source={{uri:APIs.base_url_home+classes.demoImage.replace(/\\/g,'\/')}} style={Styles.cardImage}/>
      <Text numberOfLines={1} style={Styles.cardHeading}>{classes.demoTitle.substring(0,20)}</Text>
    </View>
    </TouchableOpacity>
  )
}

export default SingleDemoClass