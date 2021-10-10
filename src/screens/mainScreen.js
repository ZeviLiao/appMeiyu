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
                        <CardItem opts={cardItemOpts}></CardItem>
                        <CardItem opts={cardItemOpts}></CardItem>
                        <CardItem opts={cardItemOpts}></CardItem>
                        <CardItem opts={cardItemOpts}></CardItem>
                        <CardItem opts={cardItemOpts}></CardItem>
                        <CardItem opts={cardItemOpts}></CardItem>
                        <CardItem opts={cardItemOpts}></CardItem>
                        <CardItem opts={cardItemOpts}></CardItem>
                        <CardItem opts={cardItemOpts}></CardItem>
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
