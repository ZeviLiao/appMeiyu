import * as React from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { AudioPlayer } from './components/AudioPlayer';


export default function App() {


  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#313131',
        justifyContent: 'center',
      }}>
      <AudioPlayer
        url={'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'}
      />
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

