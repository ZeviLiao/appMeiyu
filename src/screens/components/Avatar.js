//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Badge } from 'react-native-paper';

// create a component
const Avatar = () => {
    return (
        <View style={styles.container}>
            <View style={styles.avatar}>
                <Badge style={styles.badge}></Badge>
            </View>
            <Text style={styles.name}>Sheena</Text>
            <Text style={styles.level}>Lv.1</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    avatar: {
        width: 68,
        height: 68,
        borderRadius: 34,
        backgroundColor: "rgb(134, 91, 0)",
        borderWidth: 5,

        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: 'white',
    },
    badge: {
        position: 'absolute',
        top: -3,
        right: -10,
    },
    name: {
        fontSize: 26,
        marginBottom:5,
    },
    level: {
        fontSize: 15,
    }
});

//make this component available to the app
export default Avatar;
