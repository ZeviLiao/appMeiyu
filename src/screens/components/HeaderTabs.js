//import liraries
import React, { Component, useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MenuFooter from './MenuFooter';

// create a component
const HeaderTabs = (props) => {
    let initialState = 1
    const [tabInx, setTabInx] = useState(initialState)

    const {tabClick} = props

    const showTabContent = (tabName) => {
        
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => tabClick(1)}>
                <Text style={[styles.textActive, styles.text]}>Tab 01</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => tabClick(2)}>
                <Text style={styles.text}>Tab 02</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => tabClick(3)}>
                <Text style={styles.text}>Tab 03</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => tabClick(4)}>
                <Text style={styles.text}>Tab 04</Text>
            </TouchableOpacity>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'gray',
        justifyContent: 'space-around',
        height: 50,
    },
    text: {
        fontSize: 26,
        lineHeight: 50
    },
    tabACtive: {
        flex: 1,
        backgroundColor: 'pink'
    }
});

//make this component available to the app
export default HeaderTabs;

