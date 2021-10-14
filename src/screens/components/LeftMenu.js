//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import MenuFooter from './MenuFooter';
import Logo from './Logo';
import MenuItem from './MenuItem';
import Avatar from './Avatar';

// create a component
const LeftMenu = () => {

    const navigation = useNavigation();
    const route = useRoute();
    // console.log(route.name);

    let navTo = (routeName) => {
        navigation.navigate(routeName)
    }

    const menuList = [
        {
            routeName: 'MainScreen',
            menuLabel: '首頁',
            iconName: 'homeIcon.svg', // homeIcon_l.svg
        },
        {
            routeName: 'AllCourseMediaListL1Screen', // PrepareCourse
            menuLabel: '備課',
            iconName: 'Lesson_icon.png',  // Lesson_icon_l.png
        },
        {
            routeName: 'CourseListL1Screen', // Training
            menuLabel: '師訓',
            iconName: 'videoIcon.svg', // videoIcon_l.svg
        },
        {
            routeName: 'EmptyScreen', //LearnList
            menuLabel: '學習清單',
            iconName: 'listIcon.svg', // listIcon_l.svg
        },
        {
            routeName: 'EmptyScreen', // Tools
            menuLabel: '教具',
            iconName: 'toolIcon.svg', //toolIcon_l.svg
        },
    ]

    return (
        <View style={styles.container}>
            <View>
                <View style={styles.logo}>
                    <Logo></Logo>
                </View>
                <Avatar ></Avatar>
                <View style={{ marginTop: 15, alignItems: 'center' }}>
                    <View >
                        {menuList.map((menu, i) => (
                            <View style={{ marginBottom: 23 }}
                                key={i}>
                                <MenuItem
                                    {...menu}
                                    navTo={navTo}
                                    active={route.name === menu.routeName}
                                >
                                    {menu.menuLabel}
                                </MenuItem>
                            </View>
                        )
                        )}
                    </View>
                </View>
            </View>
            <View style={{ marginRight: 10 }}>
                <MenuFooter></MenuFooter>
            </View>
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
        backgroundColor: 'rgb(255,195,69)',
        padding: 5,
        // borderWidth: 1,
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
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
        marginTop: 40,
    }
});

//make this component available to the app
export default LeftMenu;

