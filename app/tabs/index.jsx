import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>UniBites</Text>
      <Text style={styles.description}>
  Find food available around campus.
</Text>
<View style={styles.card}>
  <Text style={styles.cardTitle}>Welcome to UniBites</Text>
  <Text>Browse campus food between classes.</Text>
</View>
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
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
  fontSize: 16,
  color: '#666666',
},
card: {
  backgroundColor: '#1d6747',
  padding: 18,
  borderRadius: 12,
  marginTop: 24,
},
cardTitle: {
  color: '#ffffff',
  fontSize: 20,
  fontWeight: 'bold',
  marginBottom: 8,
},
});