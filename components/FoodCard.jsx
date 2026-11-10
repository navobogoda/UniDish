import React from 'react';
import { useRouter } from 'expo-router';
import { StyleSheet, Text, Pressable } from 'react-native';

export default function FoodCard({ food }) {
  const router = useRouter();
  return (
<Pressable
  style={styles.card}
  onPress={() => router.push(`/food/${food.id}`)}
>    
  <Text style={styles.name}>{food.name}</Text>
  <Text style={styles.details}>
        {food.canteen} · Rs. {food.price}
  </Text>
</Pressable>  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#e4f1e8',
    padding: 16,
    borderRadius: 12,
    marginTop: 12,
  },
  name: {
    color: '#1d6747',
    fontSize: 18,
    fontWeight: 'bold',
  },
  details: {
    color: '#666666',
    marginTop: 6,
  },
});