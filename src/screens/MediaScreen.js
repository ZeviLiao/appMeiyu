//import liraries
import React, { Component } from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
// import AudioPlayer from './components/AudioPlayer';
import VideoPlayer from './components/VideoPlayer';
import MediaInfo from './components/MediaInfo';

// create a component
const MediaScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            {/* <AudioPlayer></AudioPlayer> */}
            <View style={styles.playerWrapper}>
                <View style={styles.player}>
                    <VideoPlayer></VideoPlayer>
                </View>
            </View>
            <View style={styles.mediaInfoWrapper}>
                <MediaInfo></MediaInfo>
            </View>

        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#2c3e50',
    },
    playerWrapper: {
        // width: '100%', // 47
        // flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ef00ef',
        // height: 50,
    },
    player: {
        width: '47%', // 47
        
        // flex:1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // height: 50,
    },
    mediaInfoWrapper:{
        flex:1,
        backgroundColor: '#efff00',
    }
});

//make this component available to the app
export default MediaScreen;
