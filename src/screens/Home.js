import React, {useContext} from 'react';
import {Text, View, Touchable, TouchableOpacity} from 'react-native';
import {AuthContext} from '../components/context';

const Home = ({navigation})=>{
    const {signOut} = useContext(AuthContext) 

    return (
        <>
        <TouchableOpacity onPress={() => {signOut()}}><Text>Singout</Text></TouchableOpacity>  
         <TouchableOpacity onPress={() => {navigation.navigate('Course')}}><Text>Category</Text></TouchableOpacity>   
         </>     
)

}

export default Home