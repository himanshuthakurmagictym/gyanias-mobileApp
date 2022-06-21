import React, {useRef} from  'react';
import {Text, View, SafeAreaView, TextInput, ScrollView, TouchableOpacity, Button} from 'react-native'
import Styles from '../style/style';
import {Controller, useForm} from 'react-hook-form'
import ImagePicker from 'react-native-image-crop-picker';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
 const Profile = ()=>{
 const {control, handleSubmit, formState:{errors}} = useForm({mode:"onblur"})
 const sheetRef = useRef(null);
const onSubmit = data =>{
    console.log(data)
}

const takePhotoFromCamera = ()=>{
    ImagePicker.openCamera({
        width: 300,
        height: 400,
        cropping: true,
      }).then(image => {
        console.log(image);
      });
}

const choosePhotoFromLibrary = ()=>{
    ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true
      }).then(image => {
        console.log(image);
      });
}

const renderContent = () => (
    <View
      style={{
        backgroundColor: 'white',
        padding: 16,
        height: 450,
      }}
    >
     <View style={{alignItems: 'center'}}>
        <Text style={Styles.panelTitle}>Upload Photo</Text>
        <Text style={Styles.panelSubtitle}>Choose Your Profile Picture</Text>
      </View>
      <TouchableOpacity style={Styles.panelButton} onPress={takePhotoFromCamera}>
        <Text style={Styles.panelButtonTitle}>Take Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={Styles.panelButton} onPress={choosePhotoFromLibrary}>
        <Text style={Styles.panelButtonTitle}>Choose From Library</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={Styles.panelButton}
        onPress={() => this.bs.current.snapTo(1)}>
        <Text style={Styles.panelButtonTitle}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );

    return(
        <>
         <ScrollView style={Styles.container}>
        <SafeAreaView style={Styles.mainContainer}>
        <View style={Styles.subContainer}>
        <Text style={Styles.mainHeading}>Personal Information</Text>

                <Button  title="Upload Profile Pic" onPress={() => sheetRef.current.snapTo(0)}> upload</Button>
          <Controller control={control} name="firstName" rules={{require:{value:5,message:"firstName should be minimum 5 characters long",}}} render={({field:{onChange,value, onBlur},  fieldState:{error}})=>(
            <>
            <View style={Styles.inputContainer}>
                   <TextInput placeholder="First Name" name="firstName" style={Styles.inputstextarea} value={value}
                   onBlur={onBlur} 
                   onChangeText={value => onChange(value)}   />
            </View>
            {error && (<Text style={Styles.error}>{error.message || 'Error'}</Text>)}
            </>
          )} /> 
           
           <Controller control={control} name="lastName" rules={{require:{value:5,message:"lastName should be minimum 5 characters long",}}} render={({field:{onChange,value, onBlur},  fieldState:{error}})=>(
            <>
            <View style={Styles.inputContainer}>
                   <TextInput placeholder="Last Name" name="lastName" style={Styles.inputstextarea} value={value}
                   onBlur={onBlur} 
                   onChangeText={value => onChange(value)}   />
            </View>
            {error && (<Text style={Styles.error}>{error.message || 'Error'}</Text>)}
            </>
          )} /> 

        <Controller control={control} name="phone" rules={{require:{value:5,message:"phone should be minimum 5 characters long",}}} render={({field:{onChange,value, onBlur},  fieldState:{error}})=>(
                    <>
                    <View style={Styles.inputContainer}>
                        <TextInput placeholder="Phone" name="phone" style={Styles.inputstextarea} value={value}
                        onBlur={onBlur} 
                        onChangeText={value => onChange(value)}   />
                    </View>
                    {error && (<Text style={Styles.error}>{error.message || 'Error'}</Text>)}
                    </>
                )} /> 


            <Controller control={control} name="email" rules={{require:{value:5,message:"email should be minimum 5 characters long",}}} render={({field:{onChange,value, onBlur},  fieldState:{error}})=>(
                    <>
                    <View style={Styles.inputContainer}>
                        <TextInput placeholder="Email" name="email" style={Styles.inputstextarea} value={value}
                        onBlur={onBlur} 
                        onChangeText={value => onChange(value)}   />
                    </View>
                    {error && (<Text style={Styles.error}>{error.message || 'Error'}</Text>)}
                    </>
                )} /> 

                    <Controller control={control} name="username" rules={{require:{value:5,message:"username should be minimum 5 characters long",}}} render={({field:{onChange,value, onBlur},  fieldState:{error}})=>(
                    <>
                    <View style={Styles.inputContainer}>
                        <TextInput placeholder="username" name="username" style={Styles.inputstextarea} value={value}
                        onBlur={onBlur} 
                        onChangeText={value => onChange(value)}   />
                    </View>
                    {error && (<Text style={Styles.error}>{error.message || 'Error'}</Text>)}
                    </>
                )} /> 


                <Controller control={control} name="address" rules={{require:{value:20,message:"address should be minimum 20 characters long",}}} render={({field:{onChange,value, onBlur},  fieldState:{error}})=>(
                    <>
                    <View style={Styles.inputContainer}>
                        <TextInput placeholder="address" name="address" style={Styles.inputstextarea} value={value}
                        onBlur={onBlur} 
                        onChangeText={value => onChange(value)}   />
                    </View>
                    {error && (<Text style={Styles.error}>{error.message || 'Error'}</Text>)}
                    </>
                )} /> 

                    <Controller control={control} name="city" rules={{require:{value:2,message:"city should be minimum 20 characters long",}}} render={({field:{onChange,value, onBlur},  fieldState:{error}})=>(
                    <>
                    <View style={Styles.inputContainer}>
                        <TextInput placeholder="city" name="city" style={Styles.inputstextarea} value={value}
                        onBlur={onBlur} 
                        onChangeText={value => onChange(value)}   />
                    </View>
                    {error && (<Text style={Styles.error}>{error.message || 'Error'}</Text>)}
                    </>
                )} /> 

                    <Controller control={control} name="country" rules={{require:{value:2,message:"country should be minimum 20 characters long",}}} render={({field:{onChange,value, onBlur},  fieldState:{error}})=>(
                    <>
                    <View style={Styles.inputContainer}>
                        <TextInput placeholder="country" name="country" style={Styles.inputstextarea} value={value}
                        onBlur={onBlur} 
                        onChangeText={value => onChange(value)}   />
                    </View>
                    {error && (<Text style={Styles.error}>{error.message || 'Error'}</Text>)}
                    </>
                )} /> 


                {/* <Controller control={control} name="photo" rules={{require:{value:2,message:"country should be minimum 20 characters long",}}} render={({field:{onChange,value, onBlur},  fieldState:{error}})=>(
                    <>
                    <View style={Styles.inputContainer}>
                        <TextInput placeholder="photo" name="photo" style={Styles.inputstextarea} value={value}
                        onBlur={onBlur} 
                        onChangeText={value => onChange(value)}   />
                    </View>
                    {error && (<Text style={Styles.error}>{error.message || 'Error'}</Text>)}
                    </>
                )} />  */}

                    <Controller control={control} name="states" rules={{require:{value:2,message:"states should be minimum 20 characters long",}}} render={({field:{onChange,value, onBlur},  fieldState:{error}})=>(
                    <>
                    <View style={Styles.inputContainer}>
                        <TextInput placeholder="state" name="states" style={Styles.inputstextarea} value={value}
                        onBlur={onBlur} 
                        onChangeText={value => onChange(value)}   />
                    </View>
                    {error && (<Text style={Styles.error}>{error.message || 'Error'}</Text>)}
                    </>
                )} /> 

        <TouchableOpacity onPress={handleSubmit(onSubmit)} style={Styles.button}>
               <Text style={{color:"white"}}> Submit</Text>
          </TouchableOpacity>

        </View>
        </SafeAreaView>
        <BottomSheet
        ref={sheetRef}
        snapPoints={[490, 0]}
        borderRadius={10}
        renderContent={renderContent}
        initialSnap={1}
        enabledGestureInteraction={true}
             />
        </ScrollView>
       
        </> 
    )
}

export default Profile;