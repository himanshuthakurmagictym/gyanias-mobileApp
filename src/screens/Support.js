import { View, Text, TouchableOpacity, TextInput, SafeAreaView} from 'react-native'
import React, {useState} from 'react'
import Styles from '../style/style'
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';

const data = [
  { label: 'Item 1', value: '1' },
  { label: 'Item 2', value: '2' },
  { label: 'Item 3', value: '3' },
  { label: 'Item 4', value: '4' },
  { label: 'Item 5', value: '5' },
  { label: 'Item 6', value: '6' },
  { label: 'Item 7', value: '7' },
  { label: 'Item 8', value: '8' },
];

const Support = () => {
  const [value, setValue] = useState(null);

  return (
    <SafeAreaView style={Styles.mainContainer}>
        <View style={Styles.subContainer}>
          <Text style={Styles.mainHeading}>SUPPORT</Text>
         
          <View style={Styles.inputContainer}>
                  <Dropdown
                    style={Styles.dropdown}
                    placeholderStyle={Styles.placeholderStyle}
                    selectedTextStyle={Styles.selectedTextStyle}
                    inputSearchStyle={Styles.inputSearchStyle}
                    iconStyle={Styles.iconStyle}
                    data={data}
                    search
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder="Select item"
                    searchPlaceholder="Search..."
                    value={value}
                    onChange={item => {
                      setValue(item.value);
                    }}
                renderLeftIcon={() => (
                  <AntDesign style={Styles.icon} color="black" name="Safety" size={20} />
                )}
              />
          </View>

          <View style={Styles.inputContainer}>
                <TextInput numberOfLines={4}    multiline={true} placeholder="Message" name="message" style={Styles.inputstextarea}/>
          </View>

          <TouchableOpacity onPress style={Styles.button}>
               <Text style={{color:"white"}}> Submit</Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default Support