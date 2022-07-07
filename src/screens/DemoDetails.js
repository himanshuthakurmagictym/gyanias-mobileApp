import { View, Text, ScrollView, Dimensions, Platform, StyleSheet, StatusBar, BackHandler } from 'react-native';
import React, { useEffect, useState, useRef } from 'react';
import getGlobaleStyle from "../style/style";
import APIs from '../../config';
import MediaControls, { PLAYER_STATES } from 'react-native-media-controls';
import Video from 'react-native-video';
import Orientation from 'react-native-orientation-locker';
const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;
const DemoDetails = ({route, navigation}) => {
  const [Democlass, setDemoClass] = useState("");
  const videoPlayer = useRef(null);
  const [duration, setDuration] = useState(0);
  const [paused, setPaused] = useState(true);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [playerState, setPlayerState] = useState(PLAYER_STATES.PAUSED);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = route.params;
  const Styles =  getGlobaleStyle();
  
  useEffect(()=>{
   
    const getDemo = async()=>{
    try{
      const res = await fetch(`${APIs.base_url}demodetails/${id}`);
      const datas = await res.json()
      setDemoClass(datas.data);
    }catch(error){
      console.error(error);
    }finally {
      setIsLoading(false);
    }
  }
  getDemo(); 

  const backHandler = BackHandler.addEventListener(
    "hardwareBackPress",
    backAction
  );
  return () => backHandler.remove();

  },[])


  const backAction = () => {
    navigation.goBack();
    Orientation.lockToPortrait();
    return true;
  }
  
 // Seek function
 const onSeek = (seek) => {
  videoPlayer?.current.seek(seek);
};


const onSeeking = (currentVideoTime) => setCurrentTime(currentVideoTime);

// Pause function
const onPaused = (newState) => {
  setPaused(!paused);
  setPlayerState(newState);
};

// Replay function
const onReplay = () => {
  videoPlayer?.current.seek(0);
  setCurrentTime(0);
  if (Platform.OS === 'android') {
      setPlayerState(PLAYER_STATES.PAUSED);
      setPaused(true);
  } else {
      setPlayerState(PLAYER_STATES.PLAYING);
      setPaused(false);
  }
};

const onProgress = (data) => {
  if (!isLoading) {
      setCurrentTime(data.currentTime);
  }
};

const onLoad = (data) => {
  setDuration(Math.round(data.duration));
  setIsLoading(false);
};

const onLoadStart = () => setIsLoading(true);


const onEnd = () => {
  setPlayerState(PLAYER_STATES.ENDED);
  setCurrentTime(duration);
};

const handleFullscreen = () => {
  
  if (!isFullScreen) {
      StatusBar.setHidden(true)
      navigation.getParent()?.setOptions({
        tabBarStyle: { display: 'none' },
      });
      navigation.setOptions({headerShown: false});
      Orientation.lockToLandscape();
  } else {
      if (Platform.OS === "ios") {
          Orientation.lockToPortrait();
      }
      StatusBar.setHidden(false)
      navigation.setOptions({headerShown: true}); 
      Orientation.lockToPortrait();
      
  }
  setIsFullScreen(!isFullScreen)

}


  return (
    <ScrollView style={Styles.container}>
      <View style={Styles.DemoVideo}>
      <Video
                onEnd={onEnd}
                onLoad={onLoad}
                onLoadStart={onLoadStart}
                posterResizeMode={'cover'}
                onProgress={onProgress}
                paused={paused}
                ref={(ref) => (videoPlayer.current = ref)}
                resizeMode={'cover'}
                source={{ uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" }}
                // style={{width:width, height:height/3}}
                style={isFullScreen ? styless.backgroundVideoFullscreen : styless.backgroundVideo}
            />
        <MediaControls
        // style={{width:width, height:height/3}}
        isFullScreen={isFullScreen}
        duration={duration}
        isLoading={isLoading}
        progress={currentTime}
        onFullScreen={handleFullscreen}
        onPaused={onPaused}
        onReplay={onReplay}
        onSeek={onSeek}
        onSeeking={onSeeking}
        mainColor={"#2196F3"}
        playerState={playerState}
        style={isFullScreen ? styless.backgroundVideo : styless.backgroundVideoFullscreen}
        sliderStyle={isFullScreen ? { containerStyle: styless.mediaControls, thumbStyle: {}, trackStyle: {} } : { containerStyle: {}, thumbStyle: {}, trackStyle: {} }}
        />
      </View>
     
      <Text style={Styles.DemoClassDetailHeading}>{Democlass.demoTitle?Democlass.demoTitle:"Video Description"}</Text>
      <Text style={Styles.DemoClassDetailDesc}>{Democlass.demodescription?Democlass.demodescription:"Video Description"}</Text>
      {/* <WebView
        source={{ html: "<p style='text-align: justify;'>We have the ability to build infinite way for us.</p>"}} 
      /> */}
    </ScrollView>
  )
}

const styless = StyleSheet.create({
  backgroundVideo: {
      height: 250,
      width: '100%',
      backgroundColor: "#3d3d3d"
  },
  mediaControls: {
      width: screenHeight - 170,
      height: "100%",
      flex: 1,
      alignSelf: Platform.OS === "android" ? screenHeight < 800 ? 'center' : "flex-start" : "center",
  },
  backgroundVideoFullscreen: {
      height: screenHeight,
      width: screenWidth
  }
});
export default DemoDetails