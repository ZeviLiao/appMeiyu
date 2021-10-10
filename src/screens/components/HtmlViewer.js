//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MenuFooter from './MenuFooter';

// create a component
const HtmlViewer = (props) => {
    return (
        <View
            style={[styles.container, styles.content]}
        >{props.children}</View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        minHeight: '100%'
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#2c3e50',
    },
    content: {
        // backgroundColor: 'blue',
        // fontSize: 30,
    }
});

//make this component available to the app
export default HtmlViewer;

