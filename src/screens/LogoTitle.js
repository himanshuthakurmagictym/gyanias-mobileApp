import React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';

const LogoTitle = props => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        
      }}>
     
      {/* <Image
        source={require('../../assets/img/logo.png')}
        style={{width: 35, height: 35}}
      /> */}
      <Text style={styles.header} >{props.children}</Text>
     
    </View>
  );
};

export default LogoTitle;
const styles = StyleSheet.create({
  header: {
    fontSize: 26,
    fontWeight: '700',
    color: 'black',
    justifyContent:"center",
    alignItems:"center",
  },
});
