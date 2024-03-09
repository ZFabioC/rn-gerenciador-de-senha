import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native'
import { BackHandler } from 'react-native';
import { useEffect } from 'react';

import Routes from './src/routes/routes';

export default function App() {

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => true)
    return () => BackHandler.removeEventListener('hardwareBackPress', () => true)
  },[])

  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <Routes/>
    </NavigationContainer>
  );
}