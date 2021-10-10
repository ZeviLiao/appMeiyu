//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MenuFooter from './MenuFooter';
import Logo from './Logo';
import MenuItem from './MenuItem';

// create a component
const LeftMenu = () => {
    const navigation = useNavigation();

    let navTo = (routeName) => {
        navigation.navigate(routeName)
    }

    const menuList = [
        {
            routeName: 'Screen1',
            menuLabel: 'Screen 1'
        },
        {
            routeName: 'Screen2',
            menuLabel: 'Screen 2'
        },
        {
            routeName: 'Screen3',
            menuLabel: 'Screen 3'
        },
        {
            routeName: 'Screen4',
            menuLabel: 'Screen 4'
        }
    ]

    return (
        <View style={styles.container}>
            <View>
                <Logo></Logo>
                <View>
                    <Text>hello</Text>
                    {menuList.map(menu => (<MenuItem
                        key={menu.routeName}
                        routeName={menu.routeName}>
                        {menu.menuLabel}
                    </MenuItem>)
                    )}
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
        padding: 5,
    },
    logo: {
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

