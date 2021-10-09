//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native';

// create a component
const LeftMenu = ({navigation}) => {

    let navTo = (routeName) => {
        navigation.navigate(routeName)
    }

    // const userInfo = {
    //     name: 'zevi',
    //     age: 18
    // }

    return (
        <SafeAreaView>
            <View>
                <TouchableOpacity onPress={() => navTo('Screen1')}>
                    <Text>
                        Screen 1
                    </Text>
                </TouchableOpacity>
            </View>
            {/* <View>
                <TouchableOpacity onPress={navTo('Screen2', {
                    prodId: 1,
                    userInfo
                })}>
                    <Text>
                        Screen 2
                    </Text>
                </TouchableOpacity>
            </View> */}
            <View>
                <TouchableOpacity onPress={() => navTo('Screen3')}>
                    <Text>
                        Screen 3
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default LeftMenu;

