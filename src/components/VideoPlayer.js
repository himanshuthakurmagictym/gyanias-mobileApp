
import { View, Text, ScrollView, Dimensions, Platform, StyleSheet, StatusBar, BackHandler } from 'react-native';
import { useEffect, useState, useRef } from 'react';
import getGlobaleStyle from "../style/style";
import APIs from '../../config';
import MediaControls, { PLAYER_STATES } from 'react-native-media-controls';
import Video from 'react-native-video';
import Orientation from 'react-native-orientation-locker';
import React from 'react'
const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;
const VideoPlayer = ({ navigation}) => {
    const videoPlayer = useRef(null);
    const [duration, setDuration] = useState(0);
    const [paused, setPaused] = useState(true);
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [playerState, setPlayerState] = useState(PLAYER_STATES.PAUSED);
    const [isLoading, setIsLoading] = useState(true);
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
    <>
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
        // style={isFullScreen ? styless.backgroundVideo : styless.backgroundVideoFullscreen}
        sliderStyle={isFullScreen ? { containerStyle: styless.mediaControls, thumbStyle: {}, trackStyle: {} } : { containerStyle: {}, thumbStyle: {}, trackStyle: {} }}
        />
    </>
  )
}


const styless = StyleSheet.create({
    backgroundVideo: {
        height: 250,
        width: '100%',
        backgroundColor: "#3d3d3d"
    },
    mediaControls: {
        width: screenHeight,
        height: "100%",
        flex: 1,
        alignSelf: Platform.OS === "android" ? screenHeight < 800 ? 'center' : "flex-start" : "center",
    },
    backgroundVideoFullscreen: {
        height: screenHeight,
        width: screenWidth
    }
  });
export default VideoPlayer
