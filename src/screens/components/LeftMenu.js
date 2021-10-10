//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MenuFooter from './MenuFooter';
import Logo from './Logo';

// create a component
const LeftMenu = () => {
    const navigation = useNavigation();

    let navTo = (routeName) => {
        navigation.navigate(routeName)
    }

    return (
        <View style={styles.container}>
            <View>
                <Logo></Logo>
                <View>
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
                </View>
            </View>
            <MenuFooter></MenuFooter>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        // alignItems: 'center',
        // alignSelf:'stretch',
        backgroundColor: 'lightblue',
        padding:5,
    },
    logo:{
        // textAlign:'center',
        // width:'100%',
        // flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        // alignSelf:'center',
        // backgroundColor: 'green',
        // alignContent: 'center',
        // marginHorizontal:30,
    }
});

//make this component available to the app
export default LeftMenu;

