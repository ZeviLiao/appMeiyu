//import liraries
import React, { Component } from 'react';
import { ScrollView, SafeAreaView, View, Text, StyleSheet } from 'react-native';
import AudioPlayer from './components/AudioPlayer';
import VideoPlayer from './components/VideoPlayer';
import MediaInfo from './components/MediaInfo';
import BackButton from './components/common/BackButton';

// create a component
const MediaScreen = ({ route }) => {

    const { media } = route.params;
    return (
        //
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.playerWrapper}>
                    <View style={styles.player}>
                        {
                            (media.mediaType === 'video') ?
                                (<VideoPlayer></VideoPlayer>) :
                                (<AudioPlayer></AudioPlayer>)
                        }
                    </View>
                </View>
                <View style={styles.mediaInfoWrapper}>
                    <MediaInfo></MediaInfo>
                </View>
                <View style={styles.goBack}>
                    <BackButton></BackButton>
                </View>
            </ScrollView>
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
        // marginBottom:20,
        // backgroundColor: '#efff33',
    },
    playerWrapper: {
        // width: '100%', // 47
        // flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#ef00ef',
        // height: 50,
    },
    player: {
        // width: '47%', // 47
        // flex:1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // height: 50,
    },
    mediaInfoWrapper: {
        padding: 37,
        paddingVertical: 23,
        flex: 1,
        backgroundColor: 'lightyellow',

    },
    goBack: {
        position: 'absolute',
        left: 20,
    },
});

//make this component available to the app
export default MediaScreen;
