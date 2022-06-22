import { View, Text, ScrollView, FlatList } from 'react-native'
import React from 'react'
import useGlobalStyles from '../style/style'
const data = [{id:1},{id:2},{id:3}]

const Notification = () => {
  const Styles = useGlobalStyles();
  return (
    <ScrollView style={{flex:1}}>

      <FlatList 
      data={data}
      renderItem={()=>(
        <View style={Styles.notificationContainer}>
        <View>
        <Text style={{color:"black", fontWeight:"600"}}>Message</Text>
        <Text style={{color:"black",}}>Your message has been deleted</Text>
        </View>
        <Text style={{color:"black"}}>10:20 PM</Text>
      </View>
      )}/>
        

    </ScrollView>
  )
}

export default Notification