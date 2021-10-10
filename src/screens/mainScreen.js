//import liraries
import React, { Component } from 'react';
import { SafeAreaView, Text, StyleSheet, View, Button } from 'react-native';
import LeftMenu from './components/LeftMenu';

// create a component
const MainScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <LeftMenu style={styles.leftMenu}></LeftMenu>
            <View style={styles.mainContent}>
                <View style={styles.banner}>
                    <Text>Banner</Text>
                </View>
                <View style={styles.buttonList}>
                    <Button title="Press me" onPress={() => Alert.alert('Simple Button pressed')} />
                    <Button title="Press me" onPress={() => Alert.alert('Simple Button pressed')} />
                    <Button title="Press me" onPress={() => Alert.alert('Simple Button pressed')} />
                    <Button title="Press me" onPress={() => Alert.alert('Simple Button pressed')} />
                </View>
                <View style={styles.buttonList}>
                    <Text>Card</Text>
                    <Text>Card</Text>
                    <Text>Card</Text>
                    <Text>Card</Text>
                </View>
            </View>
        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: 'pink',
    },
    leftMenu:{
        backgroundColor: 'blue',
        flex: 1,
    },
    mainContent:{
        backgroundColor: 'yellow',
        flex: 4,
    },
    banner:{
        backgroundColor: 'lightblue',
        height:'50%'
    },
    buttonList:{
        flexDirection:'row',
        justifyContent: 'space-around'
    }
});

//make this component available to the app
export default MainScreen;
