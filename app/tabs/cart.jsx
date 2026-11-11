import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { foods } from '../../data/foods';
import { useStore } from '../../context/StoreContext';
import { useRouter } from 'expo-router';

export default function CartScreen() {
  const { cart, addToCart, removeFromCart } = useStore();
  const router = useRouter();

  const cartItems = foods.filter((food) => cart[food.id] > 0);

  const total = cartItems.reduce(
    (sum, food) => sum + food.price * cart[food.id],
    0
  );

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Your Cart</Text>

      {cartItems.length === 0 ? (
        <Text style={styles.message}>Your cart is empty.</Text>
      ) : (
        <>
          {cartItems.map((food) => (
            <View key={food.id} style={styles.item}>
              <Text style={styles.name}>{food.name}</Text>
              <Text style={styles.details}>
                රු. {food.price} × {cart[food.id]}
              </Text>

              <View style={styles.controls}>
                <Pressable
                  style={styles.controlButton}
                  onPress={() => removeFromCart(food.id)}
                >
                  <Text style={styles.controlText}>−</Text>
                </Pressable>

                <Text style={styles.quantity}>{cart[food.id]}</Text>

                <Pressable
                  style={styles.controlButton}
                  onPress={() => addToCart(food.id)}
                >
                  <Text style={styles.controlText}>+</Text>
                </Pressable>
              </View>
            </View>
          ))}

          <Text style={styles.total}>Full price: Rs: {total}</Text>
          <Pressable
              style={styles.checkoutButton}
              onPress={() => router.push('/checkout')}
           >
              <Text style={styles.checkoutButtonText}>Review order</Text>
          </Pressable>
        </>
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
  item: {
    backgroundColor: '#e4f1e8',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
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
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
  controlButton: {
    backgroundColor: '#ffffff',
    width: 36,
    height: 36,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  controlText: {
    color: '#1d6747',
    fontSize: 20,
    fontWeight: 'bold',
  },
  quantity: {
    color: '#24221e',
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 16,
  },
  total: {
    color: '#1d6747',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 8,
  },
  checkoutButton: {
  backgroundColor: '#1d6747',
  padding: 14,
  borderRadius: 10,
  alignItems: 'center',
  marginTop: 16,
},
checkoutButtonText: {
  color: '#ffffff',
  fontWeight: 'bold',
},
});