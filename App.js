import * as React from 'react';
import { Text, View, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
      <Pressable
        onPress={() => navigation.navigate('Settings')}
        style={{ backgroundColor: 'plum', padding: 10, marginBottom: 10, marginTop: 10 }}
      >
        <Text>Settings</Text>
      </Pressable>
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
      <Pressable
        onPress={() => navigation.navigate('Home')}
        style={{ backgroundColor: 'plum', padding: 10, marginBottom: 10, marginTop: 10 }}
      >
        <Text>Home</Text>
      </Pressable>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}