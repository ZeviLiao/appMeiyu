

//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Player from './components/expo-audioplayer';


// create a component
const MyComponent = () => {
  const TRACKS = [
    {
      title: 'Stressed Out',
      subtitle: 'Twenty One Pilots',
      albumArtUrl: "https://cdn-images-1.medium.com/max/1344/1*fF0VVD5cCRam10rYvDeTOw.jpeg",
      audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
    },
    {
      title: 'Stressed Out',
      subtitle: 'Twenty One Pilots',
      albumArtUrl: "https://cdn-images-1.medium.com/max/1344/1*fF0VVD5cCRam10rYvDeTOw.jpeg",
      audioUrl: "https://ia600204.us.archive.org/11/items/hamlet_0911_librivox/hamlet_act5_shakespeare.mp3"
    }
  ];
  return <Player tracks={TRACKS} displayArt={true}/>
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default MyComponent;


