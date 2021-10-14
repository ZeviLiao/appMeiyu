//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MenuItem from './MenuItem';

// create a component
const MenuFooter = () => {
    const navigation = useNavigation();


    const menuList = [
        {
            routeName: 'EmptyScreen', // Setting
            menuLabel: '設定',
            iconName: 'settingIcon.svg', // homeIcon_l.svg
        },
        {
            routeName: 'EmptyScreen',  // HelpCenter
            menuLabel: '幫助',
            iconName: 'helpIcon.svg',  // Lesson_icon_l.png
        },
    ]

    let navTo = (routeName) => {
        navigation.navigate(routeName)
    }

    return (
        <View style={styles.container}>
                {menuList.map((menu,i) => (
                    <View style={styles.menuItem}
                        key={i}>
                        <MenuItem {...menu} navTo={navTo}>
                            {menu.menuLabel}
                        </MenuItem>
                    </View>)
                )}
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginBottom:10,
        // marginLeft: 15,
        // alignItems: 'center'

        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#2c3e50',
    },
    menuItem: {

        marginHorizontal: 10,
    },
});

//make this component available to the app
export default MenuFooter;

