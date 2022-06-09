import React, {useContext} from 'react';
import {Text, View, Touchable, TouchableOpacity} from 'react-native';
import {AuthContext} from '../components/context'
const Home = ({navigation})=>{
    const {signOut} = useContext(AuthContext) 

    return (
        <View>
        <TouchableOpacity onPress={() => {signOut()}}><Text>Home Screen</Text></TouchableOpacity>
        </View>
)

}

export default Home