//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

// create a component
const CardItemL1 = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.img}
                source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}
            />
            <Text style={styles.title}>Title</Text>
            <Text style={styles.desc}>description </Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#fefeee',
        marginHorizontal: 10,
        width: 200,
        padding: 20,
        // alignSelf: 'flex-start',
        margin:20
        // flexBasis: 200
    },
    img: {
        width: 50,
        height: 50,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    desc: {
        fontSize: 24
    }
});

//make this component available to the app
export default CardItemL1;
