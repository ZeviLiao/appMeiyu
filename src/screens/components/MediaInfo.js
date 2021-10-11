//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HtmlViewer from './HtmlViewer';
import Line from './Line';


// create a component
const MediaInfo = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>MediaInfo</Text>
            <Text style={styles.desc}>MediaInfo</Text>
            <Line/>
            <Text style={styles.title}>MediaInfo</Text>
            <Text style={styles.desc}>MediaInfo</Text>
            {/* <HtmlViewer></HtmlViewer> */}
        </View>
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
});

//make this component available to the app
export default MediaInfo;
