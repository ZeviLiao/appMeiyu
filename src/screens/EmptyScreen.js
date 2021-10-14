//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import BackButton from './components/common/BackButton';
import SvgUri from "expo-svg-uri";

// create a component
const EmptyScreen = ({ route }) => {

    // const { id } = route.params;
    return (
        <SafeAreaView style={styles.container}>
            {/* <View style={styles.removeNote}>
                <SvgUri source={require('../assets/icon/icon_garbage.svg')} />  
            </View> */}
            <View>
                <ScrollView style={styles.noteWrapper}>
                    <Text style={styles.title}>Empty Screen</Text>
                    {/* <Text style={styles.desc}>EmptyScreen {id}</Text> */}
                </ScrollView>
                <View style={styles.goBack}>
                    <BackButton></BackButton>
                </View>
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
    goBack: {
        position: 'absolute',
        left: 20,

        // backgroundColor: '#efffef'

    },
    text: {
        lineHeight: 50,
        fontSize: 30
    },
    noteWrapper: {
        padding: 60
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    desc: {
        fontSize: 28,
    },
    removeNote: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        width: 97,
        height: 74,
        right: 0,
        bottom: 40,
        backgroundColor: 'rgb(201,161,67)',
        borderTopLeftRadius: 37,
        borderBottomLeftRadius: 37,

    }
});

//make this component available to the app
export default EmptyScreen;
