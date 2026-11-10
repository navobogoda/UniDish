import React from 'react';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{ title: 'Home' }}
      />
      <Tabs.Screen
        name="menu"
        options={{ title: 'Menu' }}
      />
      <Tabs.Screen
        name="saved"
        options={{ title: 'Saved' }}
      />
      <Tabs.Screen
      name="cart"
      options={{ title: 'කරත්තය' }}
    />
    </Tabs>
  );
}