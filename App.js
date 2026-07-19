import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Import screens
import HomeScreen from './screens/HomeScreen';
import AllergiesScreen from './screens/AllergiesScreen';
import ScannerScreen from './screens/ScannerScreen';

// Create navigation objects
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Bottom tab navigator
function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        tabBarActiveTintColor: '#FF6B6B',
        tabBarInactiveTintColor: '#999',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: '🏠 Home',
          headerTitle: 'Food Allergy App',
        }}
      />
      <Tab.Screen
        name="Allergies"
        component={AllergiesScreen}
        options={{
          tabBarLabel: '🚨 My Allergies',
          headerTitle: 'My Allergies',
        }}
      />
      <Tab.Screen
        name="Scanner"
        component={ScannerScreen}
        options={{
          tabBarLabel: '📱 Scanner',
          headerTitle: 'Scan Food',
        }}
      />
    </Tab.Navigator>
  );
}

// Main App component
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MainApp" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
