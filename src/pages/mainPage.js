//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

// create a component
const MainPage = () => {
    return (
        <View style={styles.container}>
            <div>
                <div className="logo">
                    <Image style={{ width: 181, height: 42 }} source={require('../../assets/icon/logo.svg')} />
                </div>
                <div className="avatar">
                    <span>name</span>
                </div>
                <ul className="left-menu">
                    <li>
                        <Image style={{ width: 32, height: 32 }} source={require('../../assets/icon/homeicon.svg')} />
                        <span>首頁</span>
                    </li>
                    <li>
                        <Image style={{ width: 32, height: 32 }} source={require('../../assets/icon/lessonIcon.svg')} />
                        <span>備課</span>
                    </li>
                    <li>
                        <Image style={{ width: 32, height: 32 }} source={require('../../assets/icon/videoIcon.svg')} />
                        <span>師訓</span>
                    </li>
                    <li>
                        <Image style={{ width: 32, height: 32 }} source={require('../../assets/icon/listIcon.svg')} />
                        <span>學習清單</span>
                    </li>
                    <li>
                        <Image style={{ width: 32, height: 32 }} source={require('../../assets/icon/toolIcon.svg')} />
                        <span>教具</span>
                    </li>
                    <li>
                        <Image style={{ width: 32, height: 32 }} source={require('../../assets/icon/musicIcon.svg')} />
                        <span>音樂</span>
                    </li>
                </ul>
                <div className="left-footer">
                    <div className="setting">
                        <Image style={{ width: 32, height: 32 }} source={require('../../assets/icon/settingIcon.svg')} />
                        <span>設定</span>
                    </div>
                    <div className="help-center">
                        <Image style={{ width: 32, height: 32 }} source={require('../../assets/icon/helpIcon.svg')} />
                        <span>幫助</span>
                    </div>
                </div>
            </div>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        // backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default MainPage;
