import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import CourseSelectionScreen from './screens/CourseSelectionScreen';
import HoleSelectionScreen from './screens/HoleSelectionScreen';
import MeasurementScreen from './screens/MeasurementScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#2d5f2e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="CourseSelection" 
          component={CourseSelectionScreen}
          options={{ title: 'Selección de Recorrido' }}
        />
        <Stack.Screen 
          name="HoleSelection" 
          component={HoleSelectionScreen}
          options={{ title: 'Selección de Hoyo' }}
        />
        <Stack.Screen 
          name="Measurement" 
          component={MeasurementScreen}
          options={{ title: 'Medición' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
