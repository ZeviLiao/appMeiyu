//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Slider } from 'react-native';


function _getMMSSFromMillis(millis) {
    const totalSeconds = millis / 1000;
    const seconds = Math.floor(totalSeconds % 60);
    const minutes = Math.floor(totalSeconds / 60);

    const padWithZero = number => {
      const string = number.toString();
      if (number < 10) {
        return '0' + string;
      }
      return string;
    };
    return padWithZero(minutes) + ':' + padWithZero(seconds);
  }

// create a component
const SeekBar = ({
    positionMillis,
    durationMillis,
    sliderValue
}) => {
    sliderValue = positionMillis / durationMillis
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 1 }} />
                <Text style={[styles.text, { width: 40 }]}>
                    {_getMMSSFromMillis(positionMillis) + ' / '
                        + _getMMSSFromMillis(durationMillis)}
                </Text>
            </View>
            <Slider
                minimumValue={0}
                maximumValue={1}
                value={sliderValue || 0}
                style={styles.slider}
                minimumTrackTintColor='#fff'
                maximumTrackTintColor='rgba(255, 255, 255, 0.14)'
            />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#bcbcbc',
    },
    slider: {
        // width:'90%',
        alignSelf: 'stretch',
    }
});

//make this component available to the app

export default SeekBar;




