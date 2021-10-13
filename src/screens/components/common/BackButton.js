//import liraries
import React, { Component } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SvgUri from "expo-svg-uri";

// create a component
const BackButton = () => {

    const navigation = useNavigation();
    let navBack = () => { navigation.goBack() }
    return (
        <TouchableOpacity onPress={() => navBack()}>
            <SvgUri style={{ width: 24, height: 24 }}
                source={require('../../../assets/icon/arrowBack.svg')} />
        </TouchableOpacity>
    );
};

//make this component available to the app
export default BackButton;
