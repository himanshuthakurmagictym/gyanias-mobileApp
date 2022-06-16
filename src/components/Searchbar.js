import { StyleSheet, Text, View, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import React ,{useState} from 'react'


export default function Searchbar() {
  const [searchValue, setSearchValue] = useState('');
  const [SendSearch, setSendSearch] = useState('');
  console.log(SendSearch);
  return (
    <View style={styles.searchContainer}>
         <Icon name="search1" size={24} style={styles.searchIcon}/>
        <TextInput name="search" placeholder='Search For Classes' placeholderTextColor="#000" value={searchValue} onChangeText={setSearchValue} onEndEditing={(e) =>setSendSearch(e.nativeEvent.text)}  style={{fontFamily:"Cochin"}}/>
    </View>
  )
}

const styles = StyleSheet.create({
  searchContainer:{
      borderRadius:10,
      borderColor:"gray",
      height: 50,
      flexDirection: 'row',
      alignItems:"center",
      backgroundColor: "#ffff",
      marginRight:10,
      marginLeft:10,
      marginTop:10,
      borderWidth:1,
      padding:5,
    
  },
  searchIcon:{
    marginLeft:10,
  }
})