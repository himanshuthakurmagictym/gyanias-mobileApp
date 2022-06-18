import { View, Text, Image } from 'react-native'
import React from 'react'
import Styles from '../../style/style'
import APIs from '../../../config'
const Review = ({reviewsData}) => {
  return (
    <View style={Styles.reviewContainer}>
       <Text numberOfLines={3} style={Styles.review}>{reviewsData.review}</Text>
      <Text numberOfLines={1} style={Styles.reviewname}>{reviewsData.name.substring(0,60)}</Text>
      <Image source={{uri:reviewsData.profile}} style={Styles.reviewImage}/>
    </View>
  )
}

export default Review