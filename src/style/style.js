
import React, {useEffect, useState, useMemo} from 'react';
import {StyleSheet} from 'react-native';
import {useTheme } from '@react-navigation/native';

const getGlobalStyles =(props) => StyleSheet.create({
    cardContainer:{ alignItems:"center",   backgroundColor:"white", margin:5, borderRadius:10, borderWidth:0.3, borderColor:"gray", elevation:3},
    cardImage:{ width:250, height:150, resizeMode:'stretch', borderTopLeftRadius:10, borderTopRightRadius:10 },
    cardHeading:{fontWeight:"400", fontSize:16, color:"black", marginVertical:10},
    demoClass:{
      flex:1,
      paddingBottom:20,
      paddingTop:10,
      // backgroundColor:"white",
      // marginVertical:15,
      // elevation:8
    },
    DemoClassHeadingContainer:{
      justifyContent:'space-between',
      marginHorizontal:10,
      flexDirection:"row",
    },
    DemoClassHeading:{
      fontSize:16,
      fontWeight:"bold",
      color:"black",
      
    },
    DemoClassDescription:{
      justifyContent:"center",
      color:props.colors.text,
    },
    DemoVideo:{
      justifyContent:"center",
      alignItems:"center",
    }
    ,TeacherImage:{ width:100, height:100, resizeMode:'contain', borderRadius:50 }
    ,TeacherContainer:{alignItems:"center", width:150,height:170,  backgroundColor:"white", margin:5, borderRadius:10, borderWidth:0.3, borderColor:"gray", elevation:3}
    ,TeacherHeading:{fontWeight:"800", fontSize:16, color:"black", marginTop:10},
    button:{backgroundColor:"#007bff", borderRadius:20, color:"white", padding:10, width:"50%", alignItems:"center", },
    reviewContainer:{alignItems:"center", width:300,height:180,  backgroundColor:"white", margin:5, borderRadius:10, borderWidth:0.3, borderColor:"gray", elevation:3, padding:10, justifyContent:'center'},
    reviewImage:{ width:50, height:50, resizeMode:'contain', borderRadius:50}
    ,reviewname:{fontWeight:"bold", fontSize:18},
    review:{justifyContent:"center", textAlign:"center", color:props.colors.text},
    mainContainer:{justifyContent:"center", alignItems:"center",  flex:1,  backgroundColor:"#edf5fc"},
    subContainer:{justifyContent:"center", alignItems:"center", backgroundColor:"white", width:'100%', paddingVertical:20, elevation:8, color:props.colors.text},
    TeacherPra:{color:props.colors.text},
    inputContainer:{
      backgroundColor: "#f5fafc",
      flexDirection: 'row',
      paddingHorizontal: 3,
      borderWidth: 0.3,
      marginLeft:10,
      marginTop:10,
      marginBottom:10,
      marginRight:10,
      borderRadius:10,
      width:"80%"},
      
      inputs:{
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : 0,
        paddingLeft: 20,
        color: '#05375a',
        borderBottomColor:"#000",
        fontSize:16,
        alignItems:"center",
       
    },
    inputstextarea:{
      // flex: 1,
      // marginTop: Platform.OS === 'ios' ? 0 : 0,
      paddingLeft: 20,
      color:props.colors.text,
      // borderBottomColor:"#000",
      fontSize:16,
      // alignItems:"center",
      
    },
    mainHeading:{fontWeight:"bold", fontSize:23},
    dropdown: {
      // margin: 16,
      height: 50,
      width:"100%",
      borderBottomColor: 'gray',
      borderBottomWidth: 0.5,
      color:props.colors.text,
   
    },
    icon: {
      marginRight: 5,
    },
    placeholderStyle: {
      color:props.colors.text,
      fontSize: 16,
      
    },
    selectedTextStyle: {
      color:props.colors.text,
    
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
      color:props.colors.text
    },
    inputSearchStyle: {
      color:props.colors.text,
      height: 40,

      fontSize: 16,
    },
    error:{
        color: 'red', 
        textAlign:'left',
        paddingLeft:20,
        color:props.colors.text

    },
    panelHeader: {
      alignItems: 'center',
      color:props.colors.text
    },
    panelHandle: {
      width: 40,
      height: 8,
      borderRadius: 4,
      backgroundColor: '#00000040',
      marginBottom: 10,
    },
    panelTitle: {
      fontSize: 27,
      height: 35,
    },
    panelSubtitle: {
      fontSize: 14,
      color: 'gray',
      height: 30,
      marginBottom: 10,
    },
    panelButton: {
      padding: 13,
      borderRadius: 10,
      backgroundColor: '#FF6347',
      alignItems: 'center',
      marginVertical: 7,
    },
    panelButtonTitle: {
      fontSize: 17,
      fontWeight: 'bold',
      color: 'white',
    },
    profileImage:{
      width:100,
      height:100,
      borderRadius:50
    },
    container:{
      flex:1,
      // alignItems:"center",
      alignContent:"center"
      // color:props.colors.text,

      //  backgroundColor:"#edf5fc"
    },
    backgroundVideo: {
     flex:1
    },
    aboutus:{ fontWeight:"bold",justifyContent:"center", alignItems:"center",fontSize:20,  color:props.colors.text},
    aboutusdiscription:{padding:10, justifyContent:"center", textAlign:"justify", color:props.colors.text },
    textPlaceholder:{color:props.colors.text},
    notificationContainer:{flex:1, flexDirection:"row", alignItems:"center", justifyContent:"space-between", backgroundColor:"white", borderRadius:3, marginHorizontal:5, padding:10, elevation:3}
  })


  const Styles =()=>{
    const { colors } = useTheme();
  
    // We only want to recompute the stylesheet on changes in color.
    const styles = useMemo(() => getGlobalStyles({ colors }), [colors]);
  
    return styles;
  }
  export default Styles;