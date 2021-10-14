import * as React from 'react';
import { Button, View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './screens/MainScreen';
import AnnounceScreen from './screens/AnnounceScreen';
import CourseListL1Screen from './screens/course/CourseListL1Screen';
import CourseListL2Screen from './screens/course/CourseListL2Screen';
import CourseViewerFullScreen from './screens/course/CourseViewerFullScreen';

import CourseMediaListL2Screen from './screens/media/CourseMediaListL2Screen';
import CourseMediaListL3Screen from './screens/media/CourseMediaListL3Screen';
import CourseListScreen from './screens/media/CourseListScreen';
import MediaScreen from './screens/MediaScreen';

import AllCourseMediaListL1Screen from './screens/allCourse/CourseMediaListL1Screen';
import AllCourseMediaListL2Screen from './screens/allCourse/CourseMediaListL2Screen';
import AllCourseMediaListL3Screen from './screens/allCourse/CourseMediaListL3Screen';
import AllCourseFullScreen from './screens/allCourse/AllCourseFullScreen';

import CardSortScreen from './screens/allCourse/CardSortScreen';
import EmptyScreen from './screens/EmptyScreen';
import NotePage from './screens/NotePage';


// import Screen1 from './screens/Screen1';
// import Screen2 from './screens/Screen2';
// import Screen3 from './screens/Screen3';



const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainScreen"
        screenOptions={{
          headerShown: false,
          animationEnabled: false
        }}
      >
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="AnnounceScreen" component={AnnounceScreen} />
        <Stack.Screen name="CourseListL1Screen" component={CourseListL1Screen} />
        <Stack.Screen name="CourseListL2Screen" component={CourseListL2Screen} />
        <Stack.Screen name="CourseViewerFullScreen" component={CourseViewerFullScreen} />
        {/* <Stack.Screen name="CourseFullScreen" component={CourseFullScreen} /> */}

        <Stack.Screen name="CourseMediaListL2Screen" component={CourseMediaListL2Screen} />
        <Stack.Screen name="CourseMediaListL3Screen" component={CourseMediaListL3Screen} />
        <Stack.Screen name="CourseListScreen" component={CourseListScreen} />
        <Stack.Screen name="MediaScreen" component={MediaScreen} />

        <Stack.Screen name="AllCourseMediaListL1Screen" component={AllCourseMediaListL1Screen} />
        <Stack.Screen name="AllCourseMediaListL2Screen" component={AllCourseMediaListL2Screen} />
        <Stack.Screen name="AllCourseMediaListL3Screen" component={AllCourseMediaListL3Screen} />
        <Stack.Screen name="AllCourseFullScreen" component={AllCourseFullScreen} />
        <Stack.Screen name="CardSortScreen" component={CardSortScreen} />
        <Stack.Screen name="EmptyScreen" component={EmptyScreen} />

        <Stack.Screen name="NotePage" component={NotePage} />
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
