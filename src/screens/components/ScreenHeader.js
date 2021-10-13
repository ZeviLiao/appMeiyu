//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import MenuFooter from './MenuFooter';
import BackButton from './common/BackButton';
import SvgUri from "expo-svg-uri";

// create a component
const ScreenHeader = ({ children, isMore }) => {


    return (
        <View style={styles.container}>
            <View style={styles.goBack}>
                <BackButton></BackButton>
            </View>
            <View>
                <Text style={styles.header}>{children}</Text>
            </View>
            {isMore && (<View style={styles.more}>
                <TouchableOpacity onPress={() => Alert.alert('more')}>
                    <Text>o o o</Text>
                </TouchableOpacity>
            </View>)}

        </View>

    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(255, 214, 129)',
        height: 50,
    },
    header: {
        fontSize: 30,
        color:'rgba(26,26,26,0.7)'
    },
    goBack: {
        position: 'absolute',
        left: 20,
    },
    more: {
        position: 'absolute',
        right: 30,

    }
});

//make this component available to the app
export default ScreenHeader;

