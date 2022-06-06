import React from 'react';
import {Text, View, TouchableOpacity} from "react-native"


const Welcomescreen = ({navigation})=>{

    return(
        <View>
        <Text>Welcome to Welcomescren</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('Logins')}>
        <Text>RegistationLogin</Text>
        </TouchableOpacity>
        </View>
    )
}

export default Welcomescreen;