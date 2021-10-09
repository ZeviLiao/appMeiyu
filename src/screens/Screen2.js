//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

// create a component
function Screen2({ navigation, route}) {

    const {prodId, userInfo} = route.params;
    return (
        <View style={styles.container}>
            <Text>Screen2</Text>
            <Text>{prodId}</Text>
            <Text>{JSON.stringify(userInfo)}</Text>
            <Button
                title="Go to Details... again"
                onPress={() => navigation.push('Screen3')}
            />
            <Button title="Go to Home" onPress={() => navigation.navigate('Screen1')} />
            <Button title="Go back" onPress={() => navigation.goBack()} />
            <Button
                title="Go back to first screen in stack"
                onPress={() => navigation.popToTop()}
            />
        </View>
    );
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Screen2;
