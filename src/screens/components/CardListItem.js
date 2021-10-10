//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

// create a component
const CardItem = (props) => {
    // let { opts } = props
    let { media } = props
    return (
        <View style={[styles.container]}>
            <View style={{ flexDirection: 'row' }} >
                <Image
                    style={styles.img}
                    source={{
                        uri: 'https://via.placeholder.com/94?text=',
                    }}
                />
                <View style={{ justifyContent: 'space-evenly' }}>
                    <Text style={styles.title}>{media.title}</Text>
                    <Text style={styles.desc}>{media.subTitle} </Text>
                    <Text>Icon</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.styleLoginBtn}
                onPress={() => Alert.alert('Simple Button pressed')}>
                <Text style={styles.buttonText}>立即學習</Text>
            </TouchableOpacity>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        justifyContent: 'space-between',
        alignItems: 'baseline',
        backgroundColor: '#fefeee',
        marginHorizontal: 10,
        flexDirection: 'row',
        // width: 200,
        // padding: 20,
        // alignSelf: 'flex-start',
        marginBottom: 20,
        padding: 20,
        paddingRight: 40,
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
        width: 94,
        height: 94,
        marginRight: 15,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    desc: {
        fontSize: 16
    },
    styleLoginBtn: {
        paddingHorizontal: 15,
        // marginVertical: 15,
        // borderRadius: 5,
        backgroundColor: '#FDA749',
        borderRadius: 18,
        height: 36,
    },
    buttonText: {
        fontSize: 18,
        lineHeight: 36,
        color: 'white',
        fontWeight: 'bold',
    }
});

//make this component available to the app
export default CardItem;
