//import liraries
import React, { Component } from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import SvgUri from "expo-svg-uri";

// create a component
const MenuItem = ({ children, navTo, routeName, iconName }) => {

    let pickPicture = (iconName, active) => {
        let icon;
        switch (iconName) {
            case 'homeIcon.svg':
                icon = (active) ? require('../../assets/icon/homeIcon.svg') : require('../../assets/icon/homeIcon_l.svg');
                break;
            case 'Lesson_icon.png':
                icon = (active) ? require('../../assets/images/Lesson_icon.png') : require('../../assets/images/Lesson_icon_l.png');
                break;
            case 'videoIcon.svg':
                icon = (active) ? require('../../assets/icon/videoIcon.svg') : require('../../assets/icon/videoIcon_l.svg');
                break;
            case 'listIcon.svg':
                icon = (active) ? require('../../assets/icon/listIcon.svg') : require('../../assets/icon/listIcon_l.svg');
                break;
            case 'toolIcon.svg':
                icon = (active) ? require('../../assets/icon/toolIcon.svg') : require('../../assets/icon/toolIcon_l.svg');
                break;
            case 'settingIcon.svg':
                icon = (active) ? require('../../assets/icon/settingIcon.svg') : require('../../assets/icon/settingIcon_l.svg');
                break;
            case 'helpIcon.svg':
                icon = (active) ? require('../../assets/icon/helpIcon.svg') : require('../../assets/icon/helpIcon_l.svg');
                break;

            default:
                break;
        }
        return icon;
    }

    var icon = pickPicture(iconName, true)

    return (
        <TouchableOpacity onPress={() => navTo(routeName)} style={styles.menuItem}>
            <View style={{marginRight:15}}>
                {
                    (iconName.endsWith('.png')) ? (
                        <Image width="32" height="32" source={icon} />
                    ) : (
                        <SvgUri style={{ width: 32, height: 32 }} source={icon} />
                    )
                }
            </View>
            <Text style={styles.label}>
                {children}
            </Text>
        </TouchableOpacity>
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
    menuItem: {
        flexDirection: 'row',
        // justifyContent:'center',
        alignItems: 'center'
    },
    label: {
        fontSize: 18,
        color: 'rgb(128,87,0)'
    }
});

//make this component available to the app
export default MenuItem;
