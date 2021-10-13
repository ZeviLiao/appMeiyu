//import liraries
import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MenuFooter from './MenuFooter';

// create a component
const TrainHeaderTabs = (props) => {
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
        <View style={[styles.container, (tabList.some(t => t.type)) ? { height: 80 } : {}]}>
            {
                tabList.map((t) => (
                    (t.type) ? (
                        <View style={styles.tabButton} key={t.tabNo}>
                            <TouchableOpacity
                                style={styles.styleLoginBtn}>
                                <Text style={[styles.text]}>{t.tabLabel}</Text>
                            </TouchableOpacity>
                        </View>

                    ) : (
                        <TouchableOpacity
                            key={t.tabNo}
                            style={[styles.tabStyle, (tabNo === t.tabNo) ? styles.tabACtive : {}]}
                            onPress={() => tabTouch(t.tabNo)}>
                            <Text style={[styles.text, (tabNo === t.tabNo) ? { color: 'rgb(255,108,0)' } : {}]}>{t.tabLabel}</Text>
                        </TouchableOpacity>
                    )
                ))
            }
        </View >
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'rgb(255,214,129)',
        justifyContent: 'space-around',
        height: 60,
    },
    text: {
        // flex: 1, 
        fontSize: 26,
        color:'rgba(26,26,26,0.7)'
        // lineHeight: 50,
        // justifyContent:'flex-end',
        // alignItems:'flex-end',
    },
    tabACtive: {
        // backgroundColor: 'pink'
        borderBottomWidth: 5,
        borderBottomColor: 'rgb(255,108,0)'
    },
    tabStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 7,
        borderBottomWidth: 5,
        borderBottomColor: 'rgb(255,214,129)'
    },
    tabButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    styleLoginBtn: {
        padding: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        backgroundColor: 'lightblue',
    },
});

//make this component available to the app
export default TrainHeaderTabs;
