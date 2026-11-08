import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function MenuScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Campus Menu</Text>
      <Text>Food options will appear here.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});