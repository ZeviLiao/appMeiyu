import * as React from 'react';
import { Button, View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import MainPage from './src/pages/mainPage';
// import TestPage from './src/pages/TestPage';
// import HtmlShow from './src/pages/htmlShowPage';
// import MediaPlayerPage from './src/pages/media-player';
import MediaPlayerPage from './src/pages/media-player2';

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <MediaPlayerPage></MediaPlayerPage>
    </SafeAreaView>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// define your styles
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    height: '100%',
    // backgroundColor: '#2c3e50',
  },
});

export default App;
