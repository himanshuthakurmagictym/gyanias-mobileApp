import { View, Text, Image } from 'react-native'
import React from 'react'
import Styles from '../../style/style'
import APIs from '../../../config'
const Teacher = ({TeacherData}) => {
  return (
    <View style={Styles.TeacherContainer}>
        {TeacherData?
         <>
         <Image source={{uri:TeacherData.Profile}} style={Styles.TeacherImage}/>
         <Text style={Styles.TeacherHeading}>{TeacherData?.teacherName}</Text>
         <Text style={{}}>{TeacherData?.Position}</Text>
         </>
        :""}
     
    </View>
  )
}

export default Teacher