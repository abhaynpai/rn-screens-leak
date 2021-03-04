import React from 'react';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';

import TestPage1 from './TestPage1';
import TestPage2 from './TestPage2';
import TestPage3 from './TestPage3';

const Stack = createNativeStackNavigator();

const TestStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TestPage1" component={TestPage1} />
      <Stack.Screen name="TestPage2" component={TestPage2} />
      <Stack.Screen name="TestPage3" component={TestPage3} />
    </Stack.Navigator>
  );
};

export default TestStack;
