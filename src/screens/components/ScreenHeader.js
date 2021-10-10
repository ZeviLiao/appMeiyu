//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MenuFooter from './MenuFooter';

// create a component
const ScreenHeader = ({ children, isMore }) => {

    const navigation = useNavigation();

    let navBack = () => {
        navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <View style={styles.goBack}>
                <TouchableOpacity onPress={() => navBack()}>
                    <Text>back button</Text>
                </TouchableOpacity>
            </View>
            <View
                style={styles.header}
            >{children}</View>
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
        backgroundColor: '#efffef',
        height: 50,
    },
    header: {
        fontSize: 50,
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

