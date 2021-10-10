//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// create a component
const MenuItem = ({ children, navTo, routeName }) => {
    return (
        <View>
            <TouchableOpacity onPress={() => navTo(routeName)}>
                <Text>
                    {children}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#aaa',
    },
});

//make this component available to the app
export default MenuItem;
