//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView} from 'react-native';
import SvgUri from "expo-svg-uri";

// create a component
const MainPage = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View className="logo">
                <Image width="181" height="42" source={require('../../assets/images/logo.png')} />
            </View>
            <View className="avatar">
                <Text>name</Text>
            </View>
            <View className="left-menu">
                <View>
                    <SvgUri style={{ width: 32, height: 32 }} source={require('../../assets/icon/homeIcon.svg')} />
                    <SvgUri style={{ width: 32, height: 32 }} source={require('../../assets/icon/homeIcon_l.svg')} />
                    <Text>首頁</Text>
                </View>
                <View>
                    <Image width="32" height="32" source={require('../../assets/images/Lesson_icon.png')} />
                    <Image width="32" height="32" source={require('../../assets/images/Lesson_icon_l.png')} />
                    <Text>備課</Text>
                </View>
                <View>
                    <SvgUri style={{ width: 32, height: 32 }} source={require('../../assets/icon/videoIcon.svg')} />
                    <SvgUri style={{ width: 32, height: 32 }} source={require('../../assets/icon/videoIcon_l.svg')} />
                    <Text>師訓</Text>
                </View>
                <View>
                    <SvgUri style={{ width: 32, height: 32 }} source={require('../../assets/icon/listIcon.svg')} />
                    <SvgUri style={{ width: 32, height: 32 }} source={require('../../assets/icon/listIcon_l.svg')} />
                    <Text>學習清單</Text>
                </View>
                <View>
                    <SvgUri style={{ width: 32, height: 32 }} source={require('../../assets/icon/toolIcon.svg')} />
                    <SvgUri style={{ width: 32, height: 32 }} source={require('../../assets/icon/toolIcon_l.svg')} />
                    <Text>教具</Text>
                </View>
                <View>
                    <SvgUri style={{ width: 32, height: 32 }} source={require('../../assets/icon/musicIcon.svg')} />
                    <SvgUri style={{ width: 32, height: 32 }} source={require('../../assets/icon/musicIcon_l.svg')} />
                    <Text>音樂</Text>
                </View>
            </View>
            <View className="left-footer">
                <View className="setting">
                    <SvgUri style={{ width: 32, height: 32 }} source={require('../../assets/icon/settingIcon.svg')} />
                    <SvgUri style={{ width: 32, height: 32 }} source={require('../../assets/icon/settingIcon_l.svg')} />
                    <Text>設定</Text>
                </View>
                <View className="help-center">
                    <SvgUri style={{ width: 32, height: 32 }} source={require('../../assets/icon/helpIcon.svg')} />
                    <SvgUri style={{ width: 32, height: 32 }} source={require('../../assets/icon/helpIcon_l.svg')} />
                    <Text>幫助</Text>
                </View>
            </View>
        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        flexDirection: 'row',
        flexWrap:'wrap',
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default MainPage;
