//import liraries
import React, { Component } from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import SvgUri from "expo-svg-uri";
import { TouchableOpacity } from 'react-native-gesture-handler';

// create a component
const CardSortItem = (props) => {
    let { opts, course, sorting, onPress } = props
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.container, opts.size]}>

                <Image
                    style={styles.img}
                    source={{
                        uri: 'https://via.placeholder.com/208x117',
                    }}
                />
                <View style={{ padding: 15 }}>
                    <Text style={opts.fontTitle}>{course.title}</Text>
                    <Text style={opts.fontDesc}>{course.subTitle} </Text>
                </View>
                {
                    (sorting) && <View style={styles.moveIcon}>
                        <Image style={{ width: 20, height: 20 }} source={require('../../assets/images/icon_move_class.png')} />
                    </View>
                }
                <View style={styles.trashcan}>
                    <TouchableOpacity onPress={() => alert('remove')}>
                        <SvgUri source={require('../../assets/icon/iconGarbage_circle.svg')} />
                    </TouchableOpacity>
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
    trashcan: {
        // width: 30,
        // height: 30,
        position: 'absolute',
        // backgroundColor: '#00ffaa',
        right: 15,
        bottom: 15,
        // borderRadius: 15
    },
    moveIcon: {
        position: 'absolute',
        // backgroundColor: '#ffefef',
        top: 15,
        left: 15,
    }
});

//make this component available to the app
export default CardSortItem;
