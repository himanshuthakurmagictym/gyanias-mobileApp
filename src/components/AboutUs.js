import { View, Text,  TouchableOpacity } from 'react-native'
import React from 'react'
import useGlobalStyles from '../style/style'
import { useNavigation, useTheme } from '@react-navigation/native';

const AboutUs = () => {
const navigation = useNavigation(); 
const Styles = useGlobalStyles();
const{colors} = useTheme();
  return (
    <View style={{
              alignItems: 'center',
              backgroundColor:"white",
              borderRadius:10,
              padding:15
        }}>
       <Text style={{ fontWeight:"bold", color:colors.text, alignItems:"center",fontSize:20}}>About US</Text> 
      <Text style={{padding:10, justifyContent:"center", textAlign:"justify", color:colors.text}}>Start preparing for exams, achieve more and have a stress-free life with Gyanias. Our courses are designed to empower individuals and professionals to achieve more in life, thereby making Gyanias an education revolution.</Text>
        <TouchableOpacity onPress={()=>navigation.navigate("Aboutus")} style={Styles.button}><Text style={{color:'white'}}>Read More</Text></TouchableOpacity>
    </View>
  )
}

export default AboutUs