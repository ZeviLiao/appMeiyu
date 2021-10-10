//import liraries
import React, { Component, useState } from 'react';
import { SafeAreaView, Text, StyleSheet, View, Button } from 'react-native';
import LeftMenu from './components/LeftMenu';
import ScreenHeader from './components/ScreenHeader';
import HtmlViewer from './components/HtmlViewer';
import HeaderTabs from './components/HeaderTabs';

// create a component
const AnnounceScreen = () => {

    const [htmlData, setHtmlData] = useState('');

    const showDocById = (id) => {
        setHtmlData('data' + id)
    }

    return (
        <SafeAreaView style={styles.container}>
            <LeftMenu style={styles.leftMenu}></LeftMenu>
            <View style={styles.mainContent}>
                <ScreenHeader style={styles.header}>
                    <Text>AnnounceScreen</Text>
                </ScreenHeader>
                <HeaderTabs tabClick={(docId) => showDocById(docId)} />
                <HtmlViewer>
                    <Text  style={{fontSize:30}}>{htmlData}</Text>
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
    header: {
        backgroundColor: 'lightblue',
        fontSize: 50,
    },
    buttonList: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
});

//make this component available to the app
export default AnnounceScreen;
