

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
  })

  export default Styles;