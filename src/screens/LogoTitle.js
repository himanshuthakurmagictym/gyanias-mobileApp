import React from  'react';
import {Text, View, Image, StyleSheet} from 'react-native'
import  Icon  from 'react-native-vector-icons/FontAwesome'
 const LogoTitle = (props)=>{
  
    return(
        <View style={{flex:1, flexDirection:'row', justifyContent:'space-between', alignItems:'center', width:'100%'}}>
            <Image source={require("../../assets/img/logo.png")} style={{width:35, height:35}}/>
            <Text style={styles.header}>{props.children}</Text>
            <Icon name="bell" size={25} color='#007bff' />
        </View>
    )
}

export default LogoTitle;
const styles =  StyleSheet.create({
  header:{
    fontSize:26,
    fontWeight:'700',
    color:'black',

  }
})