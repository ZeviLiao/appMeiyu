//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MenuFooter from './MenuFooter';

// create a component
const ScreenHeader = (props) => {
    const navigation = useNavigation();

    let navBack = () => {
        navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <View style={styles.goBack}>
                <TouchableOpacity onPress={()=> navBack()}>
                    <Text>back button</Text>
                </TouchableOpacity>
            </View>
            <View
                style={styles.header}
            >{props.children}</View>
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
        // backgroundColor: '#2c3e50',
        height:50,
    },
    header: {
        fontSize: 30,
    },
    goBack:{
        position: 'absolute',
        left:0,

    }
});

//make this component available to the app
export default ScreenHeader;

