import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

function openMenu() {
  router.push('/tabs/menu');
}
  return (
    <View style={styles.container}>
      <Text style={styles.title}>UniBites</Text>
      <Text style={styles.description}>
  Find food available around campus.
</Text>
<View style={styles.card}>
  <Text style={styles.cardTitle}>Welcome to UniBites</Text>
  <Text>Browse campus food between classes.</Text>
  <Pressable style={styles.button} onPress={openMenu}>
  <Text style={styles.buttonText}>Open the menu</Text>
</Pressable>
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
  backgroundColor: '#abd2f1',
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
button: {
  backgroundColor: '#69bedb',
  padding: 10,
  borderRadius: 8,
  marginTop: 14,
},
buttonText: {
  color: '#253326',
  fontWeight: 'bold',
  textAlign: 'center',
},
});