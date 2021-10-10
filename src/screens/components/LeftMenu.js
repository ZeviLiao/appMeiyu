//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MenuFooter from './MenuFooter';

// create a component
const LeftMenu = () => {
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
                <TouchableOpacity onPress={() => navTo('Screen1')}>
                    <Text>
                        Screen 1
                    </Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={() => navTo('Screen2')}>
                    <Text>
                        Screen 2
                    </Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={() => navTo('Screen3')}>
                    <Text>
                        Screen 3
                    </Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={() => navTo('Screen4')}>
                    <Text>
                        Screen 4
                    </Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={() => navTo('Screen5')}>
                    <Text>
                        Screen 5
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
            {/* <View>
                <TouchableOpacity onPress={() => navTo('Screen3')}>
                    <Text>
                        Screen 3
                    </Text>
                </TouchableOpacity>
            </View> */}
            <MenuFooter></MenuFooter>
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
export default LeftMenu;

