//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// create a component
const MenuFooter = () => {
    const navigation = useNavigation();

    let navTo = (routeName) => {
        navigation.navigate(routeName)
    }

    // const userInfo = {
    //     name: 'zevi',
    //     age: 18
    // }

    return (
        <View style={styles.container}>
            <View>
                <TouchableOpacity onPress={() => navTo('setup')}>
                    <Text>
                        setup 
                    </Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={() => navTo('setup2')}>
                    <Text>
                        setup 2
                    </Text>
                </TouchableOpacity>
            </View>
            
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default MenuFooter;

