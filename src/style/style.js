

import {StyleSheet} from 'react-native';
const Styles = StyleSheet.create({
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
      
    }
    ,TeacherImage:{ width:100, height:100, resizeMode:'contain', borderRadius:50 }
    ,TeacherContainer:{alignItems:"center", width:150,height:170,  backgroundColor:"white", margin:5, borderRadius:10, borderWidth:0.3, borderColor:"gray", elevation:3}
    ,TeacherHeading:{fontWeight:"400", fontSize:16, color:"black", marginTop:10},
    button:{backgroundColor:"#007bff", borderRadius:5, color:"white", padding:10},
    reviewContainer:{alignItems:"center", width:300,height:180,  backgroundColor:"white", margin:5, borderRadius:10, borderWidth:0.3, borderColor:"gray", elevation:3, padding:10, justifyContent:'center'},
    reviewImage:{ width:50, height:50, resizeMode:'contain', borderRadius:50}
    ,reviewname:{fontWeight:"bold", fontSize:18},
    review:{justifyContent:"center", textAlign:"center"},
    mainContainer:{justifyContent:"center", alignItems:"center",  flex:1, },
    subContainer:{justifyContent:"center", alignItems:"center", backgroundColor:"white", width:'100%', paddingVertical:20, elevation:8},
    inputContainer:{
      backgroundColor: "#f5fafc",
      flexDirection: 'row',
      paddingHorizontal: 5,
      borderWidth: 0.3,
      marginLeft:10,
      marginTop:20,
      marginBottom:20,
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
      // color: '#05375a',
      // borderBottomColor:"#000",
      fontSize:16,
      // alignItems:"center",
      
    },
    mainHeading:{fontWeight:"bold", fontSize:23},
    dropdown: {
      // margin: 16,
      height: 50,
    
      borderBottomColor: 'gray',
      borderBottomWidth: 0.5,
    },
    icon: {
      marginRight: 5,
    },
    placeholderStyle: {
    
      fontSize: 16,
    },
    selectedTextStyle: {
      
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
     
      height: 40,
      fontSize: 16,
    },
  })

  export default Styles;