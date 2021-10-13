//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import BackButton from './components/common/BackButton';

// create a component
const NodePage = ({ route }) => {

    const { id } = route.params;
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <ScrollView style={styles.noteWrapper}>
                    <Text style={styles.title}>NodePage {id}</Text>
                    <Text style={styles.desc}>NodePage {id}</Text>
                </ScrollView>
                <View style={styles.goBack}>
                    <BackButton></BackButton>
                </View>
            </View>
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

        // backgroundColor: '#efffef'

    },
    text: {
        lineHeight: 50,
        fontSize: 30
    },
    noteWrapper: {
        padding: 60
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    desc: {
        fontSize: 28,
    }
});

//make this component available to the app
export default NodePage;
