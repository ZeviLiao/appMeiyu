//import liraries
import React, { Component } from 'react';
import { Alert, SafeAreaView, Text, StyleSheet, View, TouchableOpacity, ScrollView } from 'react-native';
import LeftMenu from './components/LeftMenu';
import CardItem from './components/CardItem';
import Button from './components/common/Button';

// create a component
const MainScreen = ({navigation}) => {

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
            navName: 'AuthPage',
        },
        {
            label: '總部服務',
            navName: 'ServiceCenter',
        },
        {
            label: '教學工具',
            navName: 'EduTools',
        },
        {
            label: '最新Q&A',
            navName: 'NewQA',
        },
        {
            label: '線上培訓',
            navName: 'OnlineTrain',
        },
    ]

    const mediaList = [
        {
            id: 1,
            picUrl: '',
            duration: '50:00',
            title: '【專家講座】',
            subTitle: '宅家線上體驗新滋味，帶你在家不荒廢！讓您上課更便利、快速上手......',
            mediaType: 'video', // music
            mediaSrc: ''
        },
        {
            id: 2,
            picUrl: '',
            duration: '08:00',
            title: '【New 活動】',
            subTitle: 'LaLa DoReMi平板冒險遊戲已上線囉！留下五星級評價即可兌換使用序號...',
            mediaType: 'music', // music
            mediaSrc: ''
        },
        {
            id: 3,
            picUrl: '',
            duration: '50:00',
            title: '【New 課程】',
            subTitle: '2021實體繪本詢問度超高！結合理財觀念與音樂舞蹈多元快樂學習...',
            mediaType: 'video', // music
            mediaSrc: ''
        },
        {
            id: 4,
            picUrl: '',
            duration: '08:00',
            title: '【New 教具】',
            subTitle: '萬聖節即將到來，把握招生好時機，搭配趣味道具一起參加萬聖節派對...',
            mediaType: 'music', // music
            mediaSrc: ''
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

    let navTo = (routeName) => {
        navigation.navigate(routeName)
    }


    return (
        <SafeAreaView style={styles.container}>
            <LeftMenu style={styles.leftMenu}></LeftMenu>
            <View style={styles.mainContent}>
                <View style={styles.banner}>
                    <Text>Banner</Text>
                </View>
                <View style={styles.buttonList}>
                    {
                        btnList.map((btn,i) => (
                            <Button key={i} onPress={() => navTo(btn.navName)}>
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
                        mediaList.map(c => (
                            <CardItem key={c.id}
                                opts={cardItemOpts} course={c}></CardItem>
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
        // backgroundColor: 'pink',
    },
    leftMenu: {
        backgroundColor: 'blue',
        flex: 1,
    },
    mainContent: {
        backgroundColor: 'yellow',
        flex: 4,
    },
    banner: {
        backgroundColor: 'lightblue',
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
    //     backgroundColor: 'pink',
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
