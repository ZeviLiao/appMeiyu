//import liraries
import React, { Component } from 'react';
import { Alert, SafeAreaView, Text, StyleSheet, View, TouchableOpacity, ScrollView } from 'react-native';
import LeftMenu from './components/LeftMenu';
import CardItem from './components/CardItem';
import Button from './components/common/Button';
import { FlatListSlider } from 'react-native-flatlist-slider';


const images = [
    {
        image:
            'https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
        desc: 'Silent Waters in the mountains in midst of Himilayas',
    },
    {
        image:
            'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
        desc:
            'Red fort in India New Delhi is a magnificient masterpeiece of humans',
    },
    {
        image:
            'https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        desc:
            'Sample Description below the image for representation purpose only',
    },
    {
        image:
            'https://images.unsplash.com/photo-1568700942090-19dc36fab0c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        desc:
            'Sample Description below the image for representation purpose only',
    },
    {
        image:
            'https://images.unsplash.com/photo-1584271854089-9bb3e5168e32?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80',
        desc:
            'Sample Description below the image for representation purpose only',
    },
]

// create a component
const MainScreen = ({ navigation }) => {

    // const cardItemOpts = { // card 1
    //     size: {
    //         width: 219,
    //         height: 219,
    //     },
    //     fontTitle: {
    //         fontSize: 14,
    //     },
    //     fontDesc: {
    //         fontSize: 14,
    //     }
    // }
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

    const cardItemOpts = { // card 1
        size: {
            width: 168,
            height: 236,
        },
        fontTitle: {
            fontSize: 14,
        },
        fontDesc: {
            fontSize: 12,
        }
    }

    const btnList = [
        {
            label: '授權須知',
            navName: 'AnnounceScreen',
        },
        {
            label: '總部服務',
            navName: 'AnnounceScreen', // ServiceCenter
        },
        {
            label: '教學工具',
            navName: 'AnnounceScreen', // EduTools
        },
        {
            label: '最新Q&A',
            navName: 'AnnounceScreen', // NewQA
        },
        {
            label: '線上培訓',
            navName: 'AnnounceScreen', // OnlineTrain
        },
    ]

    const newsList = [
        {
            id: 1,
            picUrl: '',
            duration: '50:00',
            title: '【專家講座】',
            subTitle: '宅家線上體驗新滋味，帶你在家不荒廢！讓您上課更便利、快速上手......',
            mediaType: 'video', // music
            mediaSrc: '',
            navName: 'AnnounceScreen',
        },
        {
            id: 2,
            picUrl: '',
            duration: '08:00',
            title: '【New 活動】',
            subTitle: 'LaLa DoReMi平板冒險遊戲已上線囉！留下五星級評價即可兌換使用序號...',
            mediaType: 'music', // music
            mediaSrc: '',
            navName: 'AnnounceScreen',
        },
        {
            id: 3,
            picUrl: '',
            duration: '50:00',
            title: '【New 課程】',
            subTitle: '2021實體繪本詢問度超高！結合理財觀念與音樂舞蹈多元快樂學習...',
            mediaType: 'video', // music
            mediaSrc: '',
            navName: 'AnnounceScreen',
        },
        {
            id: 4,
            picUrl: '',
            duration: '08:00',
            title: '【New 教具】',
            subTitle: '萬聖節即將到來，把握招生好時機，搭配趣味道具一起參加萬聖節派對...',
            mediaType: 'music', // music
            mediaSrc: '',
            navName: 'AnnounceScreen',
        },
        // {
        //     id: 5,
        //     picUrl: '',
        //     duration: '50:00',
        //     title: '標題1',
        //     subTitle: '副標1',
        //     mediaType: 'video', // music
        //     mediaSrc: ''
        // },
        // {
        //     id: 6,
        //     picUrl: '',
        //     duration: '08:00',
        //     title: '標題2',
        //     subTitle: '副標2',
        //     mediaType: 'music', // music
        //     mediaSrc: ''
        // },
        // {
        //     id: 7,
        //     picUrl: '',
        //     duration: '50:00',
        //     title: '標題1',
        //     subTitle: '副標1',
        //     mediaType: 'video', // music
        //     mediaSrc: ''
        // },
        // {
        //     id: 8,
        //     picUrl: '',
        //     duration: '08:00',
        //     title: '標題2',
        //     subTitle: '副標2',
        //     mediaType: 'music', // music
        //     mediaSrc: ''
        // },
    ]

    let navTo = (routeName, opts) => {
        navigation.navigate(routeName, opts)
    }


    return (
        <SafeAreaView style={styles.container}>
            <LeftMenu style={styles.leftMenu}></LeftMenu>
            <View style={styles.mainContent}>
                <View style={styles.banner}>
                    <FlatListSlider
                        data={images}
                        height={500}
                        width={800}
                        timer={5000}
                        onPress={item => alert(JSON.stringify(item))}
                        contentContainerStyle={{ paddingHorizontal: 50 }}
                        indicatorContainerStyle={{ position: 'absolute', bottom: 20 }}
                        indicatorActiveColor={'#ffffff'}
                        indicatorInActiveColor={'#ffffff'}
                        indicatorActiveWidth={30}
                        animation
                        separatorWidth={20}
                    />
                 </View>
                <View style={styles.buttonList}>
                    {
                        btnList.map((btn, i) => (
                            <Button key={i} onPress={() =>
                                navTo(btn.navName, {
                                    headerTitle: btn.label,
                                    isMenu: true,
                                    isTabs: true
                                })}>
                                {btn.label}
                            </Button>
                        ))
                    }
                </View>
                {/* <View style={styles.scrollView}>
                    <ScrollView
                        horizontal={true} >
                        {
                            mediaList.map(m => (
                                <CardItem key={m.id}
                                    opts={cardItemOpts} course={m}></CardItem>
                            ))
                        }
                    </ScrollView>
                </View> */}
                <View style={styles.buttonCardsWrapper}>
                    {
                        newsList.map(c => (
                            <CardItem key={c.id}
                                opts={cardItemOpts} course={c}
                                onPress={() =>
                                    navTo(c.navName, {
                                        headerTitle: c.title,
                                        isMenu: true,
                                        isMore: true
                                    })}
                            ></CardItem>
                        ))
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
        // 
    },
    leftMenu: {
        backgroundColor: 'blue',
        flex: 1,
    },
    mainContent: {
        
        flex: 4,
    },
    banner: {
        
        height: '50%',
        marginBottom: 15,
    },
    buttonList: {
        // overflow: 'scroll',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 15,
    },
    // scrollView: {
    //     
    //     // marginHorizontal: 20,
    // },
    buttonCardsWrapper: {
        justifyContent: 'space-evenly',
        flexDirection: 'row',
    },
    styleLoginBtn: {
        padding: 15,
        marginVertical: 15,
        borderRadius: 5,
        backgroundColor: 'lightblue'
    },
});

//make this component available to the app
export default MainScreen;
