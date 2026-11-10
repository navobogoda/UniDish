import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import FoodCard from '../../components/FoodCard';
import { foods } from '../../data/foods';
import { useStore } from '../../context/StoreContext';

export default function SavedScreen() {
  const { savedIds } = useStore();
  const savedFoods = foods.filter((food) => savedIds.includes(food.id));

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Saved dishes</Text>

      {savedFoods.length === 0 ? (
        <Text style={styles.message}>No saved dishes yet.</Text>
      ) : (
        savedFoods.map((food) => (
          <FoodCard key={food.id} food={food} />
        ))
      )}
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
  message: {
    color: '#666666',
    fontSize: 16,
  },
});