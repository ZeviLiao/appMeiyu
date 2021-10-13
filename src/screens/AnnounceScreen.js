//import liraries
import React, { Component, useState } from 'react';
import { SafeAreaView, Text, StyleSheet, View, Button } from 'react-native';
import LeftMenu from './components/LeftMenu';
import ScreenHeader from './components/ScreenHeader';
import HtmlViewer from './components/HtmlViewer';
import HeaderTabs from './components/HeaderTabs';

// create a component
const AnnounceScreen = (props) => {

    const [htmlData, setHtmlData] = useState('');
    // const { isMenu, isTabs } = props
    const { isMenu, isTabs } = {isMenu:true, isTabs:true}

    const tabList = [
        {
            tabNo: 1,
            tabLabel: '授權須知'
        },
        {
            tabNo: 2,
            tabLabel: '教室裝修'
        },
        {
            tabNo: 3,
            tabLabel: '教材說明'
        },
        {
            tabNo: 4,
            tabLabel: '課程介紹'
        },
    ]

    const showDocById = (id) => {
        setHtmlData('data' + id)
    }

    return (
        <SafeAreaView style={styles.container}>
            {isMenu && <LeftMenu style={styles.leftMenu}></LeftMenu>}
            <View style={styles.mainContent}>
                <ScreenHeader >
                    AnnounceScreen
                </ScreenHeader>
                {isTabs && <HeaderTabs 
                tabList={tabList}
                tabClick={(docId) => showDocById(docId)} />}
                <HtmlViewer>
                    <Text style={{ fontSize: 30 }}>{htmlData}</Text>
                </HtmlViewer>
            </View>
        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: 'pink',
    },
    leftMenu: {
        // backgroundColor: 'blue',
        flex: 1,
    },
    mainContent: {
        backgroundColor: 'yellow',
        flex: 4,
    },
    headerText: {
        // backgroundColor: 'lightblue',
        fontSize: 30,
    },
    buttonList: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
});

//make this component available to the app
export default AnnounceScreen;
