//import liraries
import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MenuFooter from './MenuFooter';

// create a component
const HeaderTabs = (props) => {
    let initialState = 1
    const [tabNo, setTabNo] = useState(initialState)

    const { tabClick } = props

    const tabTouch = (tabNo) =>{
        setTabNo(tabNo)
        tabClick(tabNo)
    }

    useEffect(() => {
        tabClick(tabNo)
    }, [])

    // const showTabContent = (tabName) => {

    // }
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={[styles.tabStyle, (tabNo === 1)? styles.tabACtive: {}]}
                onPress={() => tabTouch(1)}>
                <Text style={[styles.text]}>Tab 01</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.tabStyle, (tabNo === 2)? styles.tabACtive: {}]}
                onPress={() => tabTouch(2)}>
                <Text style={styles.text}>Tab 02</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.tabStyle, (tabNo === 3)? styles.tabACtive: {}]}
                onPress={() => tabTouch(3)}>
                <Text style={styles.text}>Tab 03</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.tabStyle, (tabNo === 4)? styles.tabACtive: {}]}
                onPress={() => tabTouch(4)}>
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
        backgroundColor: '#efefff',
        justifyContent: 'space-around',
        height: 50,
    },
    text: {
        fontSize: 26,
        lineHeight: 50
    },
    tabACtive: {
        // backgroundColor: 'pink'
        borderBottomWidth:5,
        borderBottomColor:'pink'
    },
    tabStyle: {
        flex: 1,
        alignItems:'center'
    }
});

//make this component available to the app
export default HeaderTabs;

