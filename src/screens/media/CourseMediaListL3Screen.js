//import liraries
import React, { Component, useState } from 'react';
import { ScrollView, SafeAreaView, Text, StyleSheet, View, Button } from 'react-native';
import LeftMenu from '../components/LeftMenu';
import ScreenHeader from '../components/ScreenHeader';
import HtmlViewer from '../components/HtmlViewer';
import TrainHeaderTabs from '../components/TrainHeaderTabs';
// import CardListItem from '../components/CardListItem';
import TrainMediaCardL3Item from '../components/TrainMediaCardL3Item';

// create a component
const CourseMediaListL3Screen = ({ navigation, route }) => {

    const { courseL2 } = route.params;

    const [htmlData, setHtmlData] = useState('');
    // const { isMenu, isTabs } = props
    const { isMenu, isHeader, isTabs } = { isMenu: true, isHeader: true, isTabs: false }

    const showDocById = (id) => {
        setHtmlData('data' + id)
    }

    const tabList = [
        {
            tabNo: 1,
            tabLabel: '教案'
        },
        {
            tabNo: 2,
            tabLabel: '影音'
        },
    ]

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
        {
            id: 3,
            picUrl: '',
            duration: '50:00',
            title: '標題1',
            subTitle: '副標1',
            mediaType: 'video', // music
            mediaSrc: ''
        },
        {
            id: 4,
            picUrl: '',
            duration: '08:00',
            title: '標題2',
            subTitle: '副標2',
            mediaType: 'music', // music
            mediaSrc: ''
        },
        {
            id: 5,
            picUrl: '',
            duration: '50:00',
            title: '標題1',
            subTitle: '副標1',
            mediaType: 'video', // music
            mediaSrc: ''
        },
        {
            id: 6,
            picUrl: '',
            duration: '08:00',
            title: '標題2',
            subTitle: '副標2',
            mediaType: 'music', // music
            mediaSrc: ''
        },
        {
            id: 7,
            picUrl: '',
            duration: '50:00',
            title: '標題1',
            subTitle: '副標1',
            mediaType: 'video', // music
            mediaSrc: ''
        },
        {
            id: 8,
            picUrl: '',
            duration: '08:00',
            title: '標題2',
            subTitle: '副標2',
            mediaType: 'music', // music
            mediaSrc: ''
        },
    ]

    // const cardItemOpts = { // card 1
    //     size: {
    //         width: 219,
    //         height: 219,
    //     },
    //     fontTitle: {
    //         fontSize: 14,
    //         color:'rgb(26,26,26)',
    //         textAlign:'center',
    //     },
    //     fontDesc: {
    //         fontSize: 14,
    //         color:'rgb(26,26,26)',
    //         textAlign:'center',
    //     }
    // }

    const cardItemOpts = { // card 2
        size: {
            width: 208,
            height: 230,
        },
        fontTitle: {
            fontSize: 20,
            fontWeight:'bold',
            // color: 'rgb(26,26,26)',
            // textAlign: 'center',
        },
        fontDesc: {
            fontSize: 15,
            // color: 'rgb(26,26,26)',
            // textAlign: 'center',
        }
    }

    let navTo = (opts) => {
        navigation.navigate('CourseListScreen', opts)
    }

    return (
        <SafeAreaView style={styles.container}>
            {isMenu && <LeftMenu style={styles.leftMenu}></LeftMenu>}
            <View style={styles.mainContent}>
                {isHeader &&
                    (<ScreenHeader >
                        <Text style={styles.headerText}
                        >{courseL2.title}</Text>
                    </ScreenHeader>)
                }
                {isTabs && <TrainHeaderTabs
                    tabList={tabList}
                    tabClick={(docId) => showDocById(docId)} />}
                <ScrollView style={styles.listScrollWrapper}>
                    <View style={styles.listWrapper}>
                        {
                            mediaList.map(m => {
                                return (
                                    <View key={m.id}
                                        style={[styles.listItem, (cardItemOpts.size.width < 200) ? { width: '25%' } : {}]}>
                                        <TrainMediaCardL3Item opts={cardItemOpts} course={m}
                                            onPress={() => navTo({ courseL3: m })}
                                        />
                                    </View>
                                )
                            })
                        }
                    </View>
                </ScrollView>
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
        
    },
    leftMenu: {
        // backgroundColor: 'blue',
        flex: 1,
    },
    mainContent: {
        // 
        flex: 4,
    },
    headerText: {
        // 
        fontSize: 30,
    },
    buttonList: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    listScrollWrapper: {
        padding: 40,
    },
    listWrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 60,
    },
    listItem: {
        // backgroundColor: 'blue',
        width: '33%',
        // justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
    }
});

//make this component available to the app
export default CourseMediaListL3Screen;
