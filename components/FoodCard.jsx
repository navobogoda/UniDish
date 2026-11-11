import React from 'react';
import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useStore } from '../context/StoreContext';

const foodEmojis = {
  rice: '🍛',
  'chicken-kottu': '🥘',
  'vegetable-kottu': '🥗',
  'egg-roti': '🫓',
  'fish-bun': '🥯',
  'cheese-sandwich': '🥪',
  'fruit-cup': '🍉',
  tea: '☕',
  'lime-juice': '🍋',
};

export default function FoodCard({ food }) {
  const router = useRouter();
  const { addToCart } = useStore();

  return (
    <View style={styles.card}>
      <Pressable
        style={styles.foodInfo}
        onPress={() => router.push(`/food/${food.id}`)}
      >
        <View style={styles.emojiBox}>
          <Text style={styles.emoji}>{foodEmojis[food.id] || '🍽️'}</Text>
        </View>

        <View style={styles.textContent}>
          <Text style={styles.category}>
            {food.category} · {food.canteen}
          </Text>
          <Text style={styles.name}>{food.name}</Text>
          <Text style={styles.description}>{food.description}</Text>
        </View>
      </Pressable>

      <View style={styles.footer}>
        <Text style={styles.price}>Rs. {food.price}</Text>

        <Pressable
          style={styles.addButton}
          onPress={() => addToCart(food.id)}
        >
          <Text style={styles.addButtonText}>Add to cart</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    padding: 14,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#eee8df',
    marginTop: 12,
  },
  foodInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  emojiBox: {
    width: 76,
    height: 76,
    borderRadius: 16,
    backgroundColor: '#fff2df',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  emoji: {
    fontSize: 38,
  },
  textContent: {
    flex: 1,
  },
  category: {
    color: '#b35a19',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  name: {
    color: '#24221e',
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    color: '#77736c',
    marginTop: 5,
    lineHeight: 20,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 14,
  },
  price: {
    color: '#24221e',
    fontSize: 17,
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#1d6747',
    paddingVertical: 11,
    paddingHorizontal: 16,
    borderRadius: 10,
  },
  addButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});