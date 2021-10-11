//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

// create a component
const CardSortItem = (props) => {
    let { opts, course, sorting } = props
    return (
        <View style={[styles.container, opts.size]}>

            <Image
                style={styles.img}
                source={{
                    uri: 'https://via.placeholder.com/208x117',
                }}
            />

            <Text style={opts.fontTitle}>{course.title}</Text>
            <Text style={opts.fontDesc}>{course.subTitle} </Text>
            {
                (sorting) && <View style={styles.moveIcon}><Text>三</Text></View>
            }
            <View style={styles.trashcan}><Text>口</Text></View>
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
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,

    },
    img: {
        // width: 50,
        // height: 50,
        width: 207,
        height: 117,
    },
    // title: {
    //     fontSize: 30,
    //     fontWeight: 'bold'
    // },
    // desc: {
    //     fontSize: 24
    // }
    trashcan: {
        width: 30,
        height: 30,
        position: 'absolute',
        backgroundColor: '#00ffaa',
        right: 5,
        bottom: 5,
        borderRadius: 15
    },
    moveIcon: {
        width: 30,
        height: 30,
        position: 'absolute',
        backgroundColor: '#ffefef',
        top: 5,
        left: 5,
    }
});

//make this component available to the app
export default CardSortItem;
