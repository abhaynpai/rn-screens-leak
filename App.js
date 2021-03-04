/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';

import {enableScreens} from 'react-native-screens';

import TestStack from './src/TestStack';

enableScreens();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      {TestStack()}
    </NavigationContainer>
  );
};

export default App;
