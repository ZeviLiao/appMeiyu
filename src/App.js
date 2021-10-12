import * as React from 'react';
import { Button, View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './screens/MainScreen';
import AnnounceScreen from './screens/AnnounceScreen';
import CourseListScreen from './screens/CourseListScreen';
import CourseListL1Screen from './screens/CourseListL1Screen';
import CardSortScreen from './screens/CardSortScreen';
import MediaScreen from './screens/MediaScreen';
import CourseFullScreen from './screens/CourseFullScreen';
// import Screen1 from './screens/Screen1';
// import Screen2 from './screens/Screen2';
// import Screen3 from './screens/Screen3';



const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CourseFullScreen"
        screenOptions={{
          headerShown: false,
          animationEnabled: false
        }}
      >
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="AnnounceScreen" component={AnnounceScreen} />
        <Stack.Screen name="CardSortScreen" component={CardSortScreen} />
        <Stack.Screen name="CourseFullScreen" component={CourseFullScreen} />
        {/* <Stack.Screen name="Screen2" component={Screen2} />
        <Stack.Screen name="Screen3" component={Screen3} /> */}
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
