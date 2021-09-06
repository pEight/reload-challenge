import React from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { Header, Body } from './components'

export default function App() {
  return (
    <View>
      <StatusBar style="light" translucent={false} />
      <Header />
      <Body />
    </View>
  );
}
