import React, {useEffect, useState, useMemo, useReducer} from 'react';
import { View, Text, SafeAreaView, ActivityIndicator, StyleSheet, Alert} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import Welcomescreen from '../screens/Welcomescreen';
import Login from '../screens/Login';
import Toast from 'react-native-toast-message';
import Profile from '../screens/Profile';
import Registration from '../screens/Registration';
import {AuthContext} from '../components/context'
import AsyncStorage  from '@react-native-async-storage/async-storage'
import TabNavigation from '../navigation/tabNavigation';
import DrawNavigation from '../navigation/DrawNavigation';
import StackNavigation from '../navigation/StackNavigation';

const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();
const Router = ()=>{
   const [Isloading, setIsloading]= useState(true);
   const [usertoken, setUsertoken]= useState(null); 
   

   const initialloginState = {
       isloading:true,
       email:null,
       userToken:null
   }
   const loginReducer =  (prevState, action)=>{
       switch(action.type){
        case 'RETRIEVE_TOKEN':
            return {
             ...prevState,
             userToken:action.token,
             isloading:false
            } ;
           case 'LOGIN':
           return {
            ...prevState,
            email: action.email,
            userToken:action.token,
            isloading:false
           } ;
           case 'LOGOUT':
           return {
            ...prevState,
            email:null,
            userToken:null,
            isloading:false
           };

           case 'SIGNUP':
           return {
            ...prevState,
            email: action.email,
            userToken:action.token,
            isloading:false
           } ;

       }

   }

  

   const [loginState, dispatch] = useReducer(loginReducer, initialloginState);

   


    const authcontext =  useMemo(()=>({
        signIn:async(foundUser)=>{   
          const userToken = String(foundUser.email);
          const email = foundUser.email;
          const password = foundUser.password;

          if(email === 'user@gmail.com' && password === 'pass'){
               try{
                    await AsyncStorage.setItem('userToken',email);
                    dispatch({ type: 'LOGIN', email:email, token:userToken});
                    Alert.alert('Login Successfully');
               }catch(e){
                    console.log(e)
               }
          }else{
            
            Alert.alert(
                "Login Details",
                "Your Details are Incorrect",
                [
                  { text: "OK", onPress: () => console.log("OK Pressed"),  style: "cancel" }
                ])
           
           
          
          }
         
        },
        signOut:async()=>{
            try{
                await AsyncStorage.removeItem('userToken');
           }catch(e){
                console.log(e)
           }
          dispatch({type: 'LOGOUT'});
        },
        signUp:async(foundUser)=>{

            try{
                await AsyncStorage.setItem('userToken',foundUser.email);
           }catch(e){
                console.log(e)
           }
            dispatch({type: 'SIGNUP', email:email, token:foundUser.email});
        },
    }),[])

   

   useEffect(()=>{
       setTimeout(async()=>{
        let userToken;
      userToken = null;
        try{
            userToken =  await AsyncStorage.getItem('userToken');
            console.log(userToken);  
        }catch(e){
            console.log(e)
        } 
         dispatch({ type: 'RETRIEVE_TOKEN', token:userToken})
       }, 1000)
   },[])

   if( loginState.Isloading){
    return(
        <View style={styles.isloading}>
            <ActivityIndicator size="large"/>
        </View>
    )
    }

    return(
        <AuthContext.Provider value={authcontext}>
            <NavigationContainer>
                {loginState.userToken !== null?
                  <DrawNavigation />
                :
                 <StackNavigation />
                }           
            </NavigationContainer>
        </AuthContext.Provider>
    )
}

export default Router;

const styles = StyleSheet.create({
    isloading:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    }
})
