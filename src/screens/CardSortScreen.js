//import liraries
import React, { Component, useState } from 'react';
import { ScrollView, SafeAreaView, Text, StyleSheet, View, Button } from 'react-native';
import LeftMenu from './components/LeftMenu';
import ScreenHeader from './components/ScreenHeader';
import HtmlViewer from './components/HtmlViewer';
import HeaderTabs from './components/HeaderTabs';
// import CardListItem from './components/CardListItem';
import CardSortItem from './components/CardSortItem';
import { DraggableGrid } from 'react-native-draggable-grid';


// create a component
const CourseListL1Screen = (props) => {

    const [htmlData, setHtmlData] = useState('');
    const [dragging, setDragging] = useState(false)
    // const { isMenu, isTabs } = props
    const { isMenu, isHeader, isTabs } = { isMenu: true, isHeader: false, isTabs: true }

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

    let initialState1 = [
        { name: '1', key: 'one' },
        { name: '2', key: 'two' },
        { name: '3', key: 'three' },
        { name: '4', key: 'four' },
        { name: '5', key: 'five' },
        { name: '6', key: 'six' },
        { name: '7', key: 'seven' },
        { name: '8', key: 'eight' },
        { name: '9', key: 'night' },
        { name: '0', key: 'zero' },
    ]

    const [data, setData] = useState(initialState)

    const showDocById = (id) => {
        setHtmlData('data' + id)
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

    const render_item = (item) => {
        return (
            // <View
            //     style={styles.item}
            //     key={item.key}
            // >
            //     <Text style={styles.item_text}>{item.name}</Text>
            // </View>
            <View key={item.key}
                style={[styles.listItem]}>
                <CardSortItem opts={cardItemOpts} course={item} />
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            {isMenu && <LeftMenu style={styles.leftMenu}></LeftMenu>}
            <View style={styles.mainContent}>
                {isHeader &&
                    (<ScreenHeader >
                        <Text style={styles.headerText}
                        >CourseListL1Screen</Text>
                    </ScreenHeader>)
                }
                {isTabs && <HeaderTabs
                    tabList={tabList}
                    tabClick={(docId) => showDocById(docId)} />}
                <View>
                    <Text style={styles.sort}>sort</Text>
                    {/* <ScrollView style={styles.listScrollWrapper}>
                        <View style={styles.listWrapper}>
                            {
                                mediaList.map(m => {
                                    return (
                                        <View key={m.id}
                                            style={[styles.listItem, (cardItemOpts.size.width < 200) ? { width: '25%' } : {}]}>
                                            <CardSortItem opts={cardItemOpts} course={m} />
                                        </View>
                                    )
                                })
                            }
                        </View>
                    </ScrollView> */}
                    <ScrollView style={styles.listScrollWrapper} scrollEnabled={!dragging}>
                        <View style={styles.listWrapper}>
                            <DraggableGrid
                                numColumns={3}
                                renderItem={render_item}
                                data={data}
                                onDragStart={() => setDragging(true)}
                                onDragRelease={(data) => {
                                    setDragging(false)
                                    setData(data);// need reset the props data sort after drag release
                                }}
                            />
                        </View>
                    </ScrollView>
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
    },
    sort: {
        position: 'absolute',
        top: 20,
        right: 20
    },
    item: {
        width: 50,
        height: 50,
        backgroundColor: 'gray'
    }
});

//make this component available to the app
export default CourseListL1Screen;
