import React, {useEffect, useState, useMemo} from 'react';
import { View, Text, SafeAreaView, ActivityIndicator, StyleSheet} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcomescreen from '../screens/Welcomescreen';
import Login from '../screens/Login';
import Home from '../screens/Home';
import Registration from '../screens/Registration';
import {AuthContext} from '../components/context'

const Stack = createStackNavigator();
const Router = ()=>{
   const [Isloading, setIsloading]= useState(true);
   const [usertoken, setUsertoken]= useState(null); 

    const authcontext =  useMemo(()=>({
        signIn:()=>{
            setUsertoken("sdfs")
            setIsloading(false);
        },
        signOut: ()=>{
            setUsertoken(null)
            setIsloading(false);
        },
        signUp: ()=>{
            setUsertoken("sdfs")
            setIsloading(false);
        },
    }))

   useEffect(()=>{
       setTimeout(()=>{
        setIsloading(false)
       }, 1000)
   },[])

   if( Isloading){
return(
    <View style={styles.isloading}>
        <ActivityIndicator size="large"/>
    </View>
)
   }
    return(
        <AuthContext.Provider value={authcontext}>
            <NavigationContainer>
                {usertoken === null?
               <Stack.Navigator >
               <Stack.Screen name="Welcomescreen" component={Welcomescreen} options={{headerShown: false}}/>
               <Stack.Screen component={Login} name="Logins" options={{ title: 'Home' }}/>
               <Stack.Screen component={Registration} name="Registration" options={{ title: 'Home' }}/>
               <Stack.Screen component={Home} name="Home" options={{ title: 'Home' }}/>
               </Stack.Navigator>
                :
                ""
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
