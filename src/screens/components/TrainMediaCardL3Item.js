//import liraries
import React, { Component } from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Image } from 'react-native';

// create a component
const TrainMediaCardL2Item = (props) => {
    let { opts, course, onPress } = props
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.container, opts.size]}>
                <Image
                    style={styles.img}
                    source={{
                        uri: 'https://via.placeholder.com/150'
                    }}
                />
                <View style={{ padding: 15 }} >
                    <Text style={[{ marginBottom: 10 }, opts.fontTitle]}>{course.title}</Text>
                    <Text style={opts.fontDesc}>{course.subTitle} </Text>
                </View>

            </View>
        </TouchableOpacity>
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
        // width: 200,
        // padding: 20,
        // alignSelf: 'flex-start',
        // margin: 20,
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
        width: 208,
        height: 117,
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
export default TrainMediaCardL2Item;
