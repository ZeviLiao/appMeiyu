//import liraries
import React, { Component, useState } from 'react';
import { Image, TouchableOpacity, ScrollView, SafeAreaView, Text, StyleSheet, View, Button } from 'react-native';
import LeftMenu from '../components/LeftMenu';
import ScreenHeader from '../components/ScreenHeader';
import HtmlViewer from '../components/HtmlViewer';
import TrainHeaderTabs from '../components/TrainHeaderTabs';
// import CardListItem from '../components/CardListItem';
import CardSortItem from '../components/CardSortItem';
import TrainCardItem from '../components/TrainCardItem';
import TrainMediaCardItem from '../components/TrainMediaCardItem';
// import SvgUri from "expo-svg-uri";

// create a component
const CourseListL1Screen = ({ navigation }) => {

    const [dragging, setDragging] = useState(false)
    const [sorting, setSorting] = useState(false)

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

    const mediaList2 = [
        {
            id: 1,
            picUrl: '',
            duration: '50:00',
            title: 'Music Titita 親子音樂律動',
            subTitle: '副標1',
            mediaType: 'video', // music
            mediaSrc: ''
        },
        {
            id: 2,
            picUrl: '',
            duration: '08:00',
            title: '3M 音樂基礎',
            subTitle: '副標2',
            mediaType: 'music', // music
            mediaSrc: ''
        },
        {
            id: 3,
            picUrl: '',
            duration: '50:00',
            title: '課程標題課程標題課程標題課',
            subTitle: '副標1',
            mediaType: 'video', // music
            mediaSrc: ''
        },
        {
            id: 4,
            picUrl: '',
            duration: '08:00',
            title: '課程標題課程標題課程標題課程標題課程標題課程標題課程標題課程',
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



    const [listData, setListData] = useState(mediaList);
    const [tabNo, setTabNo] = useState(1);
    // const { isMenu, isTabs } = props
    const { isMenu, isHeader, isTabs } = { isMenu: true, isHeader: false, isTabs: true }

    const showDocById = (id) => {
        setTabNo(id)
        if (id === 1) setListData(mediaList)
        else setListData(mediaList2)
    }

    const tabList = [
        {
            tabNo: 1,
            tabLabel: '我的備課'
        },
        {
            tabNo: 2,
            tabLabel: '課程總覽'
        },
    ]



    const cardItemOpts1 = { // card 1
        size: {
            width: 208,
            height: 230,
        },
        fontTitle: {
            fontSize: 20,
            color: 'rgb(26,26,26)',
            marginBottom: 10,
            // textAlign: 'center',
        },
        fontDesc: {
            fontSize: 15,
            color: 'rgb(26,26,26)',
            // textAlign: 'center',
        }
    }

    const cardItemOpts = { // card 2
        size: {
            width: 219,
            height: 219,
        },
        fontTitle: {
            fontSize: 14,
            color: 'rgb(26,26,26)',
            textAlign: 'center',
        },
        fontDesc: {
            fontSize: 14,
            color: 'rgb(26,26,26)',
            textAlign: 'center',
        }
    }
    let navTo = (opts) => {
        // navigation.navigate('CourseListL2Screen', opts)
        alert('not yet')
    }
    let navToMedia = (opts) => {
        navigation.navigate('AllCourseMediaListL2Screen', opts)
    }

    const toggleSort = () => {
        setSorting(!sorting)
    }

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
                <CardSortItem opts={cardItemOpts} course={item} sorting />
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
                {isTabs && <TrainHeaderTabs
                    tabList={tabList}
                    tabClick={(docId) => showDocById(docId)} />}

                {(tabNo === 1) && (<TouchableOpacity onPress={toggleSort} style={styles.sort}>
                    <Image style={{ width: 25, height: 25 }} source={require('../../assets/images/icon_sort.png')} />
                    <Text style={{ fontSize: 20, color: 'rgba(26,26,26, 0.7)' }}>{(sorting) ? ' 完成' : ' 排序'}</Text>
                </TouchableOpacity>)}

                <ScrollView style={styles.listScrollWrapper}>
                    <View style={styles.listWrapper}>
                        {
                            listData.map(m => {
                                return (
                                    <View key={m.id}
                                        style={[styles.listItem, (cardItemOpts.size.width < 200) ? { width: '25%' } : {}]}>
                                        {(tabNo === 1) && (<CardSortItem opts={cardItemOpts1} course={m}
                                            onPress={() => navTo({ courseL1: m })}
                                            sorting={sorting}
                                        />)}
                                        {(tabNo === 2) && (<TrainMediaCardItem opts={cardItemOpts} course={m}
                                            onPress={() => navToMedia({ courseL1: m })}
                                        />)}
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
        backgroundColor: 'pink',
    },
    leftMenu: {
        // backgroundColor: 'blue',
        flex: 1,
    },
    mainContent: {
        // backgroundColor: 'yellow',
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
        margin: 40,
        // backgroundColor: 'blue'
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
    },
    sort: {
        flexDirection: 'row',
        position: 'absolute',
        top: 75,
        right: 20
    },
});

//make this component available to the app
export default CourseListL1Screen;
