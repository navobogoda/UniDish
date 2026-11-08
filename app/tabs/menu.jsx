import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function MenuScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Campus Menu</Text>
      <View style={styles.foodCard}>
      <Text style={styles.foodName}>Rice and Curry</Text>
      <Text style={styles.foodDetails}>Main Canteen · Rs. 450</Text>
</View>
<View style={styles.foodCard}>
  <Text style={styles.foodName}>Chicken Kottu</Text>
  <Text style={styles.foodDetails}>Main Canteen · Rs. 680</Text>
</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fbf8f2',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  foodCard: {
  backgroundColor: '#e4f1e8',  
  padding: 16,
  borderRadius: 12,
  marginTop: 12,
},
foodName: {
  fontSize: 18,
  fontWeight: 'bold',
  color: '#1d6747',
},
foodDetails: {
  color: '#666666',
  marginTop: 6,
},
});