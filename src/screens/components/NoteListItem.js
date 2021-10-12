//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

// create a component
const NoteListItem = (props) => {
    // let { opts } = props
    let { note } = props
    return (
        <View style={[styles.container]}>
            <Text style={styles.title}>{note.title}</Text>
            <Text style={styles.desc}>{note.subTitle} </Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: 'space-between',
        alignItems: 'baseline',
        backgroundColor: '#fefeee',
        marginHorizontal: 10,
        // flexDirection: 'row',
        width: 969,
        height:130,
        // padding: 20,
        // alignSelf: 'flex-start',
        marginBottom: 20,
        padding: 20,
        paddingRight: 40,
        // flexBasis: 200

    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom:15,
    },
    desc: {
        fontSize: 20
    },
});

//make this component available to the app
export default NoteListItem;
