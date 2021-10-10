//import liraries
import React, { Component } from 'react';
import { SafeAreaView, Text, StyleSheet, View, TouchableOpacity, ScrollView } from 'react-native';
import LeftMenu from './components/LeftMenu';
import CardItem from './components/CardItem';

// create a component
const MainScreen = () => {

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
    const cardItemOpts = { // card 2
        size: {
            width: 163,
            height: 181,
        },
        fontTitle: {
            fontSize: 16,
        },
        fontDesc: {
            fontSize: 13,
        }
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
    return (
        <SafeAreaView style={styles.container}>
            <LeftMenu style={styles.leftMenu}></LeftMenu>
            <View style={styles.mainContent}>
                <View style={styles.banner}>
                    <Text>Banner</Text>
                </View>
                <View style={styles.buttonList}>
                    <TouchableOpacity style={styles.styleLoginBtn}
                        onPress={() => Alert.alert('Simple Button pressed')}>
                        <Text>Press Here</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.styleLoginBtn}
                        onPress={() => Alert.alert('Simple Button pressed')}>
                        <Text>Press Here</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.styleLoginBtn}
                        onPress={() => Alert.alert('Simple Button pressed')}>
                        <Text>Press Here</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.styleLoginBtn}
                        onPress={() => Alert.alert('Simple Button pressed')}>
                        <Text>Press Here</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.scrollView}>
                    <ScrollView
                        horizontal={true} >
                        {
                            mediaList.map(m => (
                                <CardItem key={m.id}
                                    opts={cardItemOpts} course={m}></CardItem>
                            ))
                        }
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
        backgroundColor: 'blue',
        flex: 1,
    },
    mainContent: {
        backgroundColor: 'yellow',
        flex: 4,
    },
    banner: {
        backgroundColor: 'lightblue',
        height: '50%'
    },
    buttonList: {
        // overflow: 'scroll',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    scrollView: {
        backgroundColor: 'pink',
        // marginHorizontal: 20,
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
