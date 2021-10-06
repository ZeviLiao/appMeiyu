import * as React from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import AudioSlider from './components/AudioSlider';
import AudioFile from '../assets/hello.mp3';

export default function App() {


  return (
    <View style={[styles.StandardContainer, {
      flex: 0,
      flexDirection: "column",
      justifyContent: "flex-start",
      marginTop: 100,
      marginBottom: 5,
    }]}>

      <View style={{
        flex: 0,
        flexDirection: "row",
        justifyContent: "space-between",
      }}>

        <Text style={[styles.StandardText, { flex: 5 }]}>
          Audio name
        </Text>

        <TouchableOpacity
          style={[{ flex: 1 }]}
        >
          <Text style={styles.StandardText}>Edit</Text>
        </TouchableOpacity>


      </View>

      <AudioSlider audio={AudioFile} />

    </View>
  );
}

// define your styles
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#2c3e50',
  },
  video: {
    width: '100%',
    height: 300
  }
});

