//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

// create a component
const CardItem = (props) => {
    let { opts, course } = props
    return (
        <View style={[styles.container, opts.size]}>
            <Image
                style={styles.img}
                source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}
            />
            <Text style={opts.fontTitle}>{course.title}</Text>
            <Text style={opts.fontDesc}>{course.subTitle} </Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fefeee',
        marginHorizontal: 10,
        // width: 200,
        // padding: 20,
        // alignSelf: 'flex-start',
        margin: 20,
        // flexBasis: 200
        borderRadius:10,
    },
    img: {
        width: 50,
        height: 50,
    },
    // title: {
    //     fontSize: 30,
    //     fontWeight: 'bold'
    // },
    // desc: {
    //     fontSize: 24
    // }
});

//make this component available to the app
export default CardItem;
