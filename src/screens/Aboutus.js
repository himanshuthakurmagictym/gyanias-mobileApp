import { View, Text } from 'react-native'
import React from 'react'
import useGlobalStyles from '../style/style'
const Aboutus = () => {
  const Styles = useGlobalStyles();
  return (
    <View style={[Styles.container,{ alignItems:"center"}]}>
    {/* <Text style={Styles.aboutus}>About US</Text>  */}
      <Text style={Styles.aboutusdiscription}>Start preparing for exams, achieve more and have a stress-free life with Gyanias. Our courses are designed to empower individuals and professionals to achieve more in life, thereby making Gyanias an education revolution.</Text>
    </View>
  )
}

export default Aboutus