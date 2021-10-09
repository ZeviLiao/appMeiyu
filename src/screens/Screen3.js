//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import LeftMenu from './components/LeftMenu';


// create a component
function Screen3({ navigation }) {


    return (
        <View style={styles.container}>
            <LeftMenu navigation={navigation} style={styles.leftMenu}></LeftMenu>
            <View style={styles.leftMenu}>
                <Text>Screen3</Text>
                {/* <Button
                title="Go to Details... again"
                onPress={() => navigation.push('Screen3')}
            /> */}
                {/* <Button title="Go to Home" onPress={() => navigation.navigate('Screen1')} /> */}
                <Button title="Go back" onPress={() => navigation.goBack()} />
                <Button
                    title="Go back to first screen in stack"
                    onPress={() => navigation.popToTop()}
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
export default Screen3;
