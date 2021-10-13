//import liraries
import React, { Component } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

// create a component
const Button = ({children , onPress}) => {
    return (
        <TouchableOpacity style={styles.styleHomeBtn}
            onPress={onPress}>
            <Text style={styles.labelBtn}>{children}</Text>
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    styleBtn: {
        padding: 15,
        marginVertical: 15,
        borderRadius: 5,
        backgroundColor: 'lightblue'
    },
    styleHomeBtn: {
        padding: 15,
        marginVertical: 15,
        borderRadius: 5,
        backgroundColor: '#FCEECC'
    },
    labelBtn:{
        fontSize:22,
        color:'#F3B35A'
    }
});

//make this component available to the app
export default Button;
