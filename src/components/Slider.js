import React from 'react'
import {Text, View, Touchable, TouchableOpacity, FlatList, Image, useWindowDimensions} from 'react-native';
const Slider = ({banner}) => {
  const width = useWindowDimensions().width
  return (
   <>
     <FlatList
            data={banner}
            horizontal
            snapToAlignment={'center'}
            margin={5}
            
            decelerationRate={'fast'}
            renderItem={({item})=>(
                <Image source={{uri:item.src}} style={{ width:width-20, height:150, resizeMode:'contain', borderRadius:10, margin:5}}/>
            )}
      />
   </>
  )
}

export default Slider
