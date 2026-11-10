import React from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { foods } from '../../data/foods';
import { useStore } from '../../context/StoreContext';

export default function FoodDetailsScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const { savedIds, toggleSaved ,addToCart} = useStore();

  const food = foods.find((item) => item.id === id);

  return ( 
    <ScrollView contentContainerStyle={styles.container}>
      <Pressable onPress={() => router.back()} style={styles.backButton}>
        <Text style={styles.backText}>← Back to menu</Text>
      </Pressable>

      {food ? (
        <View style={styles.card}>
          <Text style={styles.emoji}>🍽️</Text>
              <Text style={styles.name}>{food.name}</Text>
    {food.description ? (
      <Text style={styles.detail}>{food.description}</Text>
    ) : null}

    {food.ingredients?.length > 0 && (
      <View>
        <Text style={styles.sectionTitle}>Ingredients</Text>
        {food.ingredients.map((ingredient, index) => (
          <Text key={index} style={styles.detail}>
            • {ingredient}
          </Text>
        ))}
      </View>
    )} 
          <Text style={styles.detail}>Canteen: {food.canteen}</Text>
          <Text style={styles.detail}>Category: {food.category}</Text>
          <Text style={styles.price}>Rs. {food.price}</Text>
          <Text style={styles.detail}>
            {food.vegetarian ? 'Vegetarian' : 'Not vegetarian'}
          </Text>

        <Pressable
        style={styles.saveButton}
        onPress={() => toggleSaved(food.id)}
       >
        <Text style={styles.saveButtonText}>
          {savedIds.includes(food.id) ? 'Remove from saved' : 'Save this dish'}
        </Text>
      </Pressable>

          <Pressable
      style={styles.cartButton}
      onPress={() => addToCart(food.id)}
    >
      <Text style={styles.cartButtonText}>Add to cart</Text>
    </Pressable>

        </View> 
      ) : (
        <Text>Food not found.</Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fbf8f2',
  },
  backButton: {
    marginBottom: 20,
  },
  backText: {
    color: '#1d6747',
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 16,
  },
  emoji: {
    fontSize: 42,
    marginBottom: 12,
  },
  name: {
    color: '#24221e',
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  detail: {
    color: '#666666',
    fontSize: 16,
    marginTop: 8,
  },
  price: {
    color: '#1d6747',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 16,
  },
  sectionTitle: {
  color: '#24221e',
  fontSize: 18,
  fontWeight: 'bold',
  marginTop: 20,
},
saveButton: {
  backgroundColor: '#1d6747',
  padding: 12,
  borderRadius: 10,
  marginTop: 20,
  alignItems: 'center',
},
saveButtonText: {
  color: '#ffffff',
  fontWeight: 'bold',
},
cartButton: {
  backgroundColor: '#f2b34d',
  padding: 12,
  borderRadius: 10,
  marginTop: 10,
  alignItems: 'center',
},
cartButtonText: {
  color: '#253326',
  fontWeight: 'bold',
},
});
