//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import LeftMenu from './components/LeftMenu';

// create a component
function MMainPage({ navigation }) {
    const userInfo = {
        name: 'zevi',
        age: 18
    }
    return (
        <View style={styles.container}>
            <LeftMenu navigation={navigation} style={styles.leftMenu}></LeftMenu>
            <View style={styles.leftMenu}>
                <Text>MMainPage
                </Text>
                <Button
                    title="Go to Details... again"
                    onPress={() => navigation.push('Screen2', {
                        prodId: 1,
                        userInfo
                    })}
                />
            </View>
        </View>
    );
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#2c3e50',
    },
    leftMenu: {
        flex: 1,
        justifyContent: 'center',
    },
    mainContent: {
        flex: 1
    }
});

//make this component available to the app
export default MMainPage;
