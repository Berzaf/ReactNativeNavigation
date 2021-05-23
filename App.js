import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigation from './Navigators/BottomTabNavigation'
import TopTabNavigator from './Navigators/TopBarNavigator'
import StackNavigation from './Navigators/StackNavigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <BottomTabNavigation />
    </SafeAreaProvider>
  );
}


