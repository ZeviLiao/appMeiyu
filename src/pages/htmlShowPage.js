//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';


const html = `
<html>
<body>

<h1>My First Heading</h1>

<p>My first paragraph.</p>

</body>
</html>
`

// create a component
const HtmlShow = () => {
    return (
        <View style={styles.container}>
            <WebView
                originWhitelist={['*']}
                source={{ html}}
            />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#efefef',
        padding: 20,
        margin: 20,
        // backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default HtmlShow;
