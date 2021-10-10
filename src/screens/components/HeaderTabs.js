//import liraries
import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MenuFooter from './MenuFooter';

// create a component
const HeaderTabs = (props) => {
    let initialState = 1
    const [tabNo, setTabNo] = useState(initialState)

    const { tabClick, tabList } = props

    const tabTouch = (tabNo) => {
        setTabNo(tabNo)
        tabClick(tabNo)
    }

    useEffect(() => {
        tabClick(tabNo)
    }, [])

    return (
        <View style={styles.container}>
            {
                tabList.map((t) => (
                    <TouchableOpacity
                        key={t.tabNo}
                        style={[styles.tabStyle, (tabNo === t.tabNo) ? styles.tabACtive : {}]}
                        onPress={() => tabTouch(t.tabNo)}>
                        <Text style={[styles.text]}>{t.tabLabel}</Text>
                    </TouchableOpacity>
                ))
            }
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
        borderBottomWidth: 5,
        borderBottomColor: 'pink'
    },
    tabStyle: {
        flex: 1,
        alignItems: 'center'
    }
});

//make this component available to the app
export default HeaderTabs;

