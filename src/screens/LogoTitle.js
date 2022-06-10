import React from  'react';
import {Text, View, Image} from 'react-native'

 const LogoTitle = ()=>{
    return(
        <View style={{flex:1, flexDirection:'row', justifyContent:'space-between', alignItems:'center', backgroundColor:"red"}}>
          <Image source={require("../../assets/img/logo.png")} style={{width:50, height:50}}/>
             <Text >LogoTitle</Text> 
           <Text >LogoTitle</Text> 
        </View>
    )
}

export default LogoTitle;