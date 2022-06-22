import { View, Text, TouchableOpacity, TextInput, SafeAreaView} from 'react-native'
import React, {useState} from 'react'
import useGlobalStyles from '../style/style'
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useForm, Controller} from 'react-hook-form';
const data = [
  { label: 'Inqury', value: '1' },
  { label: 'Contact', value: '2' },
  { label: 'Bug', value: '3' },


];

const Support = () => {
  const [Dropdownvalue, setDropdownvalue] = useState(1);
  const {control, handleSubmit,  formState: {errors, isValid}} =useForm({mode: 'onBlur'})
  const Styles = useGlobalStyles();
  const onSubmit = (data)=>{
    Object.assign(data, {Dropdown: Dropdownvalue});
    // const finalobject = {data, ...Dropdownvalue};
    console.log(data)
  }

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
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder="Inqury"
                    // searchPlaceholder="Search..."
                    value={Dropdownvalue}
                    onChange={item => {
                      setDropdownvalue(item.value);
                    }}
                renderLeftIcon={() => (
                  <AntDesign style={Styles.icon} color="black" name="Safety" size={20} />
                )}
              />
          </View>
            <Controller 
            control={control}
            name="message"
            rules={{required:"filed is missing", minLength:{value:20,  message: 'password should be minimum 20 characters long',}}}
            render={({field: {onChange, value, onBlur}, fieldState:{error}})=>(
              <>
                <View style={Styles.inputContainer}>
                       <TextInput numberOfLines={4} 
                       multiline={true} placeholder="Message" placeholderTextColor={Styles.textPlaceholder.color} name="message" style={Styles.inputstextarea} value={value}
                       onBlur={onBlur} 
                       onChangeText={value => onChange(value)}   />
                </View>
                {error && (<Text style={Styles.error}>{error.message || 'Error'}</Text>)}
                </>
            )}
            />      
          

          <TouchableOpacity onPress={handleSubmit(onSubmit)} style={Styles.button}>
               <Text style={{color:"white"}}> Submit</Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default Support