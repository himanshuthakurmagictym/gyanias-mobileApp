import { View, Text, Image } from 'react-native'
import React from 'react'
import useGlobalStyles from '../../style/style'
import APIs from '../../../config'
const Teacher = ({TeacherData}) => {
  const Styles = useGlobalStyles();
  return (
    <View style={Styles.TeacherContainer}>
        {TeacherData?
         <>
         <Image source={{uri:TeacherData.Profile}} style={Styles.TeacherImage}/>
         <Text style={Styles.TeacherHeading}>{TeacherData?.teacherName}</Text>
         <Text style={Styles.TeacherPra}>{TeacherData?.Position}</Text>
         </>
        :""}
     
    </View>
  )
}

export default Teacher