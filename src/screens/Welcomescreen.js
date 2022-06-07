import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Image} from "react-native"
import  Icon  from 'react-native-vector-icons/AntDesign'

const Welcomescreen = ({navigation})=>{

    return(
        <View style={styles.container}>
         <View style={styles.mainsection}>       
        <Image source={require("../../assets/img/logo.png")} style={{width:200, height:200}}/>
        <Text style={styles.welcometext} >Welcome to GyanIAS</Text>
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate('Registration')} style={styles.registerbutton}>
        <Text style={styles.registrationtexts}>Registation</Text>
        <Icon name="rightcircle" size={22} color="#fff"/>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Logins')} style={styles.loginbutton}>
        <Text style={styles.registrationtexts}>Login</Text>
        <Icon name="rightcircle" size={22} color="#fff"/>
        </TouchableOpacity>
       
        </View>
    )
}

export default Welcomescreen;

const styles = StyleSheet.create({
    registerbutton:{  
        fontSize:20,
        flext:1,
        backgroundColor: '#007bff',
        color:'#fff',
        padding:10,
        flexDirection:'row',
        justifyContent:'space-between',
        borderRadius:5,
        width:'60%',
        marginBottom:20,
    
    },
    loginbutton:{  
        fontSize:20,
        flext:1,
        backgroundColor: '#007bff',
        color:'#fff',
        padding:10,
        flexDirection:'row',
        justifyContent:'space-between',
        borderRadius:5,
        width:'60%',
        marginBottom:50,
    
    },
    container:{ 
        flex:1,
        justifyContent:'center',
        alignItems:'center' 
    },
    welcometext:{
        color:'black',
        fontWeight:'bold',
        fontSize:30,
        marginTop:20,
        marginBottom:50
    },
    welcomeimage:{
        fontSize:50,
    },
    registrationtexts:{
        fontSize:20,
        color:'#ffff',
    },
    mainsection: {
        flex:1,
        justifyContent:"flex-end",
        alignItems:"center"
    }

})