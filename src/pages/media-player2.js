import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import SeekBar from './components/SeekBar'
import { Audio } from 'expo-av'

export default class PlayerScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false,
      playbackObject: null,
      volume: 1.0,
      isBuffering: false,
      paused: true,
      currentIndex: 0,
      durationMillis: 1,
      positionMillis: 0,
      sliderValue: 0,
      isSeeking: false,
    }
  }

  async componentDidMount() {
    try {
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: false,
        interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
        playsInSilentModeIOS: true,
        interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
        shouldDuckAndroid: true,
        staysActiveInBackground: true,
        playThroughEarpieceAndroid: true
      })
      this.loadAudio()
    } catch (e) {
      console.log(e)
    }
  }

  async loadAudio() {
    const { currentIndex, isPlaying, volume } = this.state

    try {
      const playbackObject = new Audio.Sound()
      const source = {
        uri: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
      }

      const status = {
        shouldPlay: isPlaying,
        volume,
      }

      playbackObject.setOnPlaybackStatusUpdate(this.onPlaybackStatusUpdate)
      await playbackObject.loadAsync(source, status, true)
      this.setState({ playbackObject })
      var sliderValue = this.state.positionMillis / this.state.durationMillis
    } catch (e) {
      console.log(e)
    }
  }

  handlePlayPause = async () => {
    const { isPlaying, playbackObject } = this.state
    isPlaying ? await playbackObject.pauseAsync() : await playbackObject.playAsync()
    this.setState({
      isPlaying: !isPlaying
    })
  }

  onPlaybackStatusUpdate = status => {
    this.setState({
      isBuffering: status.isBuffering,
      durationMillis: status.durationMillis,
      positionMillis: status.positionMillis,
    })
  }

  render() {
    const { item } = {
      item: {
        title: 'a',
        text: 'abc',
      }
    }
    return (
      <View style={globalStyles.container}>
        <View style={globalStyles.subHeader}>
          <Text style={globalStyles.title}>{item.title}</Text>
        </View>
        <View style={styles.text}>
          <Text>{item.text}</Text>
        </View>
        <SeekBar
          durationMillis={this.state.durationMillis}
          positionMillis={this.state.positionMillis}
          sliderValue={this.state.sliderValue}
        />
        <TouchableOpacity
          onPress={this.handlePlayPause}>
          <Text style={styles.paragraph}>play</Text>
        </TouchableOpacity>
      </View>

    )
  }
}

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subHeader: {

  },
  title: {

  }
});

const styles = StyleSheet.create({
  text: {
  }
});