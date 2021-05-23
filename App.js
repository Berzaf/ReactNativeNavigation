import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigation from './Navigators/BottomTabNavigation'

import StackNavigation from './Navigators/StackNavigation';

export default function App() {
  return (
    <StackNavigation />
  );
}


