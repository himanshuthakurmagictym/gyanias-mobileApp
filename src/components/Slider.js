import React from 'react'
import {Text, View, Touchable, TouchableOpacity, FlatList, Image} from 'react-native';
const Slider = ({banner}) => {
  return (
   <>
     <FlatList
            data={banner}
            renderItem={({item})=>(
                <>
               <Text> {item.id}</Text>
                <Image source={{url:item.src}} style={{width:200, height:200}}/>
                </>
            )}
      />
   </>
  )
}

export default Slider
