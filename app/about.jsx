import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>About UniBites</Text>

      <View style={styles.card}>
        <Text style={styles.description}>
          UniBites is a university canteen menu demonstration. Students can
          browse food, search and filter dishes, view food details, save
          favourites, and add dishes to a cart.
        </Text>
        <Text style={styles.description}>
          The menu and orders are stored on this device. This demonstration
          does not send orders to a canteen or process payments.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fbf8f2',
  },
  content: {
    padding: 20,
    paddingBottom: 34,
  },
  title: {
    color: '#24221e',
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 18,
    borderRadius: 16,
  },
  description: {
    color: '#55514a',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 12,
  },
});