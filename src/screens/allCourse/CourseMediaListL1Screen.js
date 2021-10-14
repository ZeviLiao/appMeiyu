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
import { DraggableGrid } from 'react-native-draggable-grid';

// create a component
const CourseListL1Screen = ({ navigation }) => {


    const initialState = [
        {
            id: 1,
            key:'1',
            picUrl: '',
            duration: '50:00',
            title: '標題1',
            subTitle: '副標1',
            mediaType: 'video', // music
            mediaSrc: ''
        },
        {
            id: 2,
            key:'2',
            picUrl: '',
            duration: '08:00',
            title: '標題2',
            subTitle: '副標2',
            mediaType: 'music', // music
            mediaSrc: ''
        },
        {
            id: 3,
            key:'3',
            picUrl: '',
            duration: '50:00',
            title: '標題1',
            subTitle: '副標1',
            mediaType: 'video', // music
            mediaSrc: ''
        },
        {
            id: 4,
            key:'4',
            picUrl: '',
            duration: '08:00',
            title: '標題2',
            subTitle: '副標2',
            mediaType: 'music', // music
            mediaSrc: ''
        },
        {
            id: 5,
            key:'5',
            picUrl: '',
            duration: '50:00',
            title: '標題1',
            subTitle: '副標1',
            mediaType: 'video', // music
            mediaSrc: ''
        },
        {
            id: 6,
            key:'6',
            picUrl: '',
            duration: '08:00',
            title: '標題2',
            subTitle: '副標2',
            mediaType: 'music', // music
            mediaSrc: ''
        },
        {
            id: 7,
            key:'7',
            picUrl: '',
            duration: '50:00',
            title: '標題1',
            subTitle: '副標1',
            mediaType: 'video', // music
            mediaSrc: ''
        },
        {
            id: 8,
            key:'8',
            picUrl: '',
            duration: '08:00',
            title: '標題2',
            subTitle: '副標2',
            mediaType: 'music', // music
            mediaSrc: ''
        },
    ]

    const [dragging, setDragging] = useState(false)
    const [sorting, setSorting] = useState(false)

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



    const [listData, setListData] = useState(initialState);
    const [tabNo, setTabNo] = useState(1);
    // const { isMenu, isTabs } = props
    const { isMenu, isHeader, isTabs } = { isMenu: true, isHeader: false, isTabs: true }

    const showDocById = (id) => {
        setTabNo(id)
        if (id === 1) 
            setListData(listData)
        else 
            setListData(mediaList2)
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
        navigation.navigate('AllCourseFullScreen', opts)
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
                <CardSortItem opts={cardItemOpts1} course={item}
                    sorting={sorting}
                />
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
                            sorting ? (
                                <DraggableGrid
                                    numColumns={3}
                                    renderItem={render_item}
                                    data={listData}
                                    onDragStart={() => setDragging(true)}
                                    onDragRelease={(data) => {
                                        setDragging(false)
                                        setListData(data);// need reset the props data sort after drag release
                                    }}
                                />
                            ) : (
                                listData.map(item => {
                                    return (
                                        <View key={item.id}
                                            style={[styles.listItem, (cardItemOpts.size.width < 200) ? { width: '25%' } : {}]}>
                                            {(tabNo === 1) && (<CardSortItem opts={cardItemOpts1} course={item}
                                                onPress={() => navTo({ courseL3: item })}
                                                sorting={sorting}
                                            />)}
                                            {(tabNo === 2) && (<TrainMediaCardItem opts={cardItemOpts} course={item}
                                                onPress={() => navToMedia({ courseL1: item })}
                                            />)}
                                        </View>
                                    )
                                })
                            )
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
