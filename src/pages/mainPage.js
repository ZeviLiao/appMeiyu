//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

// create a component
const MainPage = () => {
    return (
        <View style={styles.container}>
            <div>
                <div className="logo">
                    <Image style={{ width: 300, height: 100 }} source={require('../../assets/icon/logo.svg')} />
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
        alignItems: 'center',
        // backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default MainPage;
