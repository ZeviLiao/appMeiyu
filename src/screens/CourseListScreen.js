//import liraries
import React, { Component, useState } from 'react';
import { SafeAreaView, Text, StyleSheet, View, Button } from 'react-native';
import LeftMenu from './components/LeftMenu';
import ScreenHeader from './components/ScreenHeader';
import HtmlViewer from './components/HtmlViewer';
import HeaderTabs from './components/HeaderTabs';
import CardListItem from './components/CardListItem';

// create a component
const AnnounceScreen = (props) => {

    const [htmlData, setHtmlData] = useState('');
    // const { isMenu, isTabs } = props
    const { isMenu, isTabs } = { isMenu: true, isTabs: false }

    const showDocById = (id) => {
        setHtmlData('data' + id)
    }

    const mediaList = [
        {
            id: 1,
            picUrl: '',
            duration: '50:00',
            title: '標題1',
            subTitle: '副標1',
            mediaType: 'video', // music
            mediaSrc: ''
        },
        {
            id: 2,
            picUrl: '',
            duration: '08:00',
            title: '標題2',
            subTitle: '副標2',
            mediaType: 'music', // music
            mediaSrc: ''
        },
    ]

    return (
        <SafeAreaView style={styles.container}>
            {isMenu && <LeftMenu style={styles.leftMenu}></LeftMenu>}
            <View style={styles.mainContent}>
                <ScreenHeader >
                    <Text style={styles.headerText}
                    >AnnounceScreen</Text>
                </ScreenHeader>
                <View style={styles.listWrapper}>
                {isTabs && <HeaderTabs tabClick={(docId) => showDocById(docId)} />}
                {
                    mediaList.map(m => {
                        return (
                            <CardListItem media={m}/>
                        )
                    })
                }
                </View>
                
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
    },
    listWrapper:{
        padding: 40
    }
});

//make this component available to the app
export default AnnounceScreen;
