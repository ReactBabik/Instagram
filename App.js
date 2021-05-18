import AppNavigator from './src/AppNavigator';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import {View, Text} from 'react-native'

function App() {
  return (
    <NavigationContainer>{<AppNavigator />}</NavigationContainer>
    // <View>
    //   <Text>Hello</Text>
    // </View>
  )
}

export default App;