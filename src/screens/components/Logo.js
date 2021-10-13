//import liraries
import React, { Component } from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// create a component
const Logo = () => {
    const navigation = useNavigation();

    let navHome = () => {
        // navigation.navigate('home')
        Alert.alert('home')
    }

    // const userInfo = {
    //     name: 'zevi',
    //     age: 18
    // }

    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <TouchableOpacity onPress={() => navHome()}>
                    <Image width="181" height="42" source={require('../../assets/images/logo.png')} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // flexDirection: 'row',
        // justifyContent: 'flex-end'

        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#aabbcc',
    },
    logo: {
        width: 200,
        height: 50,
        // flex: 1,
        // flexDirection: 'row',
        // justifyContent: 'flex-end'
        // backgroundColor: '#efffcc',
        marginVertical: 10,
    }
    // setupItem:{
    //     backgroundColor: '#efffff',
    //     padding:10,
    //     marginHorizontal:5,
    // }
});

//make this component available to the app
export default Logo;

