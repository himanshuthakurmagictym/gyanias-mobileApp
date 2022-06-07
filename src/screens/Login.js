import React from 'react';
import {Text, View, TouchableOpacity, TextInput, SafeAreaView, StyleSheet, Platform, ImageBackground} from "react-native"
import  Icon  from 'react-native-vector-icons/Fontisto'
import  Icons  from 'react-native-vector-icons/AntDesign'
import LinearGradient from 'react-native-linear-gradient';
const Login = ({navigation})=>{
    return(
        <SafeAreaView  style={styles.container}>
        <ImageBackground source={require("../../assets/img/welcomebackground.jpg")} resizeMode="cover" style={{flex:1,justifyContent:'center'}}>
        <View style={styles.contentContainer}>
            <Text style={styles.heading}>Login</Text>
            <View style={styles.inputContainer}>
                <Icon name="email" style={styles.inputicon}/>
                <TextInput style={styles.inputs}
                placeholder="Your E-mail"
                value=""
                />
                <Icons name="checkcircle" style={styles.inputicon}/>
            </View>
            <View style={styles.inputContainer}>
            <Icon name="locked" style={styles.inputicon}/>
                <TextInput style={styles.inputs}
                placeholder="Your Password"
                value=""
                />
                 <Icons name="eye" style={styles.inputicon}/>
            </View>
            <TouchableOpacity  >
            <LinearGradient colors={['#007bff', '#007bbb']} style={styles.loginbutton}>   
                <Text style={styles.logintexts}>Submit</Text>
            </LinearGradient> 
            </TouchableOpacity>
           
        </View>
        </ImageBackground>
        </SafeAreaView>
    )
}

export default Login;
const styles =  StyleSheet.create({
    inputs:{
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : 0,
        paddingLeft: 20,
        color: '#05375a',
        borderBottomColor:"#000",
        fontSize:18,
        alignItems:"center"
    },
    container:{
        flex:1,
        justifyContent:"center",
      
    },
    heading:{
        fontSize:30,
        alignItems:"baseline",
        fontWeight:'bold',
        color:"#000",
        paddingTop:30,
        paddingLeft:20

    }, 
    inputContainer: {
        height: 50,
        backgroundColor: "#fff",
        flexDirection: 'row',
        paddingHorizontal: 15,
        borderWidth: 0.5,
        marginLeft:10,
        marginTop:20,
        marginRight:10,
        borderRadius:5,
        alignItems:"center"
      },
      inputicon:{
        fontSize: 22
      },
       loginbutton:{  
        fontSize:20,
        flext:1,
        backgroundColor: '#007bff',
        color:'#fff',
        padding:10,
        flexDirection:'row',
        justifyContent:"center",
        borderRadius:5,
        marginLeft:10,
        marginRight:10,
        marginBottom:50,
        marginTop:20,
    
    },
    logintexts:{
        fontSize:20,
        color:'#ffff',
    },
    contentContainer:{
       justifyContent:"center",
       
    }
})