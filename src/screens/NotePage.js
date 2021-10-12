//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';

// create a component
const NodePage = () => {

    const navigation = useNavigation();

    let navBack = () => {
        navigation.goBack()
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.goBack}>
                <TouchableOpacity onPress={() => navBack()}>
                    <Text>back button</Text>
                </TouchableOpacity>
            </View>
            <ScrollView>
            <Text>NodePage</Text>
            </ScrollView>
        </SafeAreaView>
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
    goBack: {
        position: 'absolute',
        left: 20,

    },
});

//make this component available to the app
export default NodePage;
