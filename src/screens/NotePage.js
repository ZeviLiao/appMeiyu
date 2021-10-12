//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';

// create a component
const NodePage = ({navigation, route}) => {

    const {id} = route.params;

    let navBack = () => { navigation.goBack() }

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <View style={styles.goBack}>
                    <TouchableOpacity onPress={() => navBack()}>
                        <Text style={styles.text}> &nbsp; &lt;</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView style={styles.noteWrapper}>
                    <Text style={styles.title}>NodePage {id}</Text>
                    <Text style={styles.desc}>NodePage {id}</Text>
                </ScrollView>
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
        // position: 'absolute',
        // left: 20,

        backgroundColor: '#efffef'

    },
    text: {
        lineHeight: 50,
        fontSize: 30
    },
    noteWrapper: {
        padding: 30
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
