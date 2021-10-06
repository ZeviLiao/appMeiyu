//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatListSlider } from 'react-native-flatlist-slider';


const images = [
    {
        image:
            'https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
        desc: 'Silent Waters in the mountains in midst of Himilayas',
    },
    {
        image:
            'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
        desc:
            'Red fort in India New Delhi is a magnificient masterpeiece of humans',
    },
    {
        image:
            'https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        desc:
            'Sample Description below the image for representation purpose only',
    },
    {
        image:
            'https://images.unsplash.com/photo-1568700942090-19dc36fab0c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        desc:
            'Sample Description below the image for representation purpose only',
    },
    {
        image:
            'https://images.unsplash.com/photo-1584271854089-9bb3e5168e32?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80',
        desc:
            'Sample Description below the image for representation purpose only',
    },
]



// create a component
const TestPage = () => {
    return (
        <View style={styles.container}>
            <FlatListSlider
                data={images}
                height={240}
                width={400}
                timer={5000}
                onPress={item => alert(JSON.stringify(item))}
                contentContainerStyle={{ paddingHorizontal: 22 }}
                indicatorContainerStyle={{ position: 'absolute', bottom: 20 }}
                indicatorActiveColor={'#8e44ad'}
                indicatorInActiveColor={'#ffffff'}
                indicatorActiveWidth={30}
                animation
                separatorWidth={10}
            />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#2c3e50',
        width: 450
    },
});

//make this component available to the app
export default TestPage;
