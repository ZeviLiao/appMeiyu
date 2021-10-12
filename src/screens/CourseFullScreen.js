//import liraries
import React, { Component, useState } from 'react';
import {
    ScrollView, SafeAreaView, Text, StyleSheet, View, Button,
    TouchableOpacity,
    DrawerLayoutAndroidComponent
} from 'react-native';
import LeftMenu from './components/LeftMenu';
import ScreenHeader from './components/ScreenHeader';
import HtmlViewer from './components/HtmlViewer';
import HeaderTabs from './components/HeaderTabs';
import CardListItem from './components/CardListItem';
import NoteListItem from './components/NoteListItem';
// import CardSortItem from './components/CardSortItem';
import { DraggableGrid } from 'react-native-draggable-grid';


// create a component
const CourseFullScreen = (props) => {

    const [htmlData, setHtmlData] = useState('');
    const [dragging, setDragging] = useState(false)
    const [sorting, setSorting] = useState(false)
    const [compName, setCompName] = useState('htmlDoc')
    // const { isMenu, isTabs } = props
    const { isMenu, isHeader, isTabs } = { isMenu: false, isHeader: true, isTabs: true }

    let initialState = [
        {
            id: 1,
            key: '1',
            picUrl: '',
            duration: '50:00',
            title: '標題1',
            subTitle: '副標1',
            mediaType: 'video', // music
            mediaSrc: ''
        },
        {
            id: 2,
            key: '2',
            picUrl: '',
            duration: '08:00',
            title: '標題2',
            subTitle: '副標2',
            mediaType: 'music', // music
            mediaSrc: ''
        },
        {
            id: 3,
            key: '3',
            picUrl: '',
            duration: '50:00',
            title: '標題1',
            subTitle: '副標1',
            mediaType: 'video', // music
            mediaSrc: ''
        },
        {
            id: 4,
            key: '4',
            picUrl: '',
            duration: '08:00',
            title: '標題2',
            subTitle: '副標2',
            mediaType: 'music', // music
            mediaSrc: ''
        },
        {
            id: 5,
            key: '5',
            picUrl: '',
            duration: '50:00',
            title: '標題1',
            subTitle: '副標1',
            mediaType: 'video', // music
            mediaSrc: ''
        },
        {
            id: 6,
            key: '6',
            picUrl: '',
            duration: '08:00',
            title: '標題2',
            subTitle: '副標2',
            mediaType: 'music', // music
            mediaSrc: ''
        },
        {
            id: 7,
            key: '7',
            picUrl: '',
            duration: '50:00',
            title: '標題1',
            subTitle: '副標1',
            mediaType: 'video', // music
            mediaSrc: ''
        },
        {
            id: 8,
            key: '8',
            picUrl: '',
            duration: '08:00',
            title: '標題2',
            subTitle: '副標2',
            mediaType: 'music', // music
            mediaSrc: ''
        },
    ]

    const [data, setData] = useState(initialState)
    // const showDocById = (id) => {
    //     setHtmlData('data' + id)
    // }
    const dispComponent = (id) => {
        let compName = 'htmlDoc'
        switch (id) {
            case 2:
                compName = 'mediaList'
                break;
            case 3:
                compName = 'noteList'
                break;
            // default:
            //     compName = 'htmlDoc'
            //     break;
        }
        setCompName(compName)
    }

    const tabList = [
        {
            tabNo: 1,
            tabLabel: 'Tab 01'
        },
        {
            tabNo: 2,
            tabLabel: 'Tab 02'
        },
        {
            tabNo: 3,
            tabLabel: 'Tab 03'
        },
        {
            type: 'button',
            tabNo: 4,
            tabLabel: '開始上課'
        }
    ]

    const cardItemOpts = { // card 1
        size: {
            width: 208,
            height: 230,
        },
        fontTitle: {
            fontSize: 20,
        },
        fontDesc: {
            fontSize: 15,
        }
    }

    // const cardItemOpts = { // card 2
    //     size: {
    //         width: 163,
    //         height: 181,
    //     },
    //     fontTitle: {
    //         fontSize: 16,
    //     },
    //     fontDesc: {
    //         fontSize: 13,
    //     }
    // }

    return (
        <SafeAreaView style={styles.container}>
            {isMenu && <LeftMenu style={styles.leftMenu}></LeftMenu>}
            <View style={styles.mainContent}>
                {isHeader &&
                    (<ScreenHeader >
                        <Text style={styles.headerText}
                        >CourseFullScreen</Text>
                    </ScreenHeader>)
                }
                {isTabs && <HeaderTabs
                    tabList={tabList}
                    tabClick={(tabNo) => dispComponent(tabNo)} />}
                <ScrollView style={styles.scrollView} scrollEnabled={!dragging}>
                    {(compName === 'htmlDoc') && (<HtmlViewer><Text>hello</Text></HtmlViewer>)}
                    {(compName === 'mediaList') && (
                        <View style={styles.listWrapper}>
                            {
                                data.map(m => {
                                    return (
                                        <CardListItem key={m.id} media={m} />
                                    )
                                })
                            }
                        </View>
                    )}
                    {(compName === 'noteList') && (<View style={styles.noteListWrapper}>
                            {
                                data.map(n => {
                                    return (
                                        <NoteListItem key={n.id} note={n} />
                                    )
                                })
                            }
                        </View>)}
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
    scrollView: {
        margin: 40,
    },
    listWrapper: {
        alignSelf:'center',
        marginBottom: 40,
        width: 695,
    },
    noteListWrapper:{
        alignSelf:'center',
    }
});

//make this component available to the app
export default CourseFullScreen;
