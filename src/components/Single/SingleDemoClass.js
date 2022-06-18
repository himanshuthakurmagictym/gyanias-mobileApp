import { View, Text, Image } from 'react-native'
import React from 'react'
import Styles from '../../style/style'
import APIs from '../../../config'
const SingleDemoClass = ({classes}) => {
  return (
    <View style={Styles.cardContainer}>
      <Image source={{uri:APIs.base_url_home+classes.demoImage.replace(/\\/g,'\/')}} style={Styles.cardImage}/>
      <Text numberOfLines={1} style={Styles.cardHeading}>{classes.demoTitle.substring(0,20)}</Text>
    </View>
  )
}

export default SingleDemoClass