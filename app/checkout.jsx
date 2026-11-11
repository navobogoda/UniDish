import React, { useState } from 'react';
import {  Pressable, ScrollView, StyleSheet, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { foods } from '../data/foods';
import { useStore } from '../context/StoreContext';

export default function CheckoutScreen() {
  const router = useRouter();
  const [orderMessage, setOrderMessage] = useState('');
  const { cart, placeOrder } = useStore();

  const items = foods.filter((food) => cart[food.id] > 0);
  const total = items.reduce(
    (sum, food) => sum + food.price * cart[food.id],
    0
  );

  function confirmOrder() {
    if (items.length === 0) {
      return;
    }

    placeOrder();

   setOrderMessage(
  'Order saved on this device. It was not sent to a canteen.'
);
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Review order</Text>

      {items.map((food) => (
        <Text key={food.id} style={styles.item}>
          {food.name} × {cart[food.id]} · Rs. {food.price * cart[food.id]}
        </Text>
      ))}

      <Text style={styles.total}>Total · Rs. {total}</Text>
      <Text style={styles.note}>
        This is an offline demo. No payment is taken and no order is sent.
      </Text>

      <Pressable
        disabled={items.length === 0}
        onPress={confirmOrder}
        style={[styles.button, items.length === 0 && styles.disabled]}
      >
        <Text style={styles.buttonText}>Save demo order on this device</Text>
      </Pressable>
      {orderMessage ? (
  <>
    <Text style={styles.successMessage}>{orderMessage}</Text>

    <Pressable
      style={styles.ordersButton}
      onPress={() => router.push('/tabs/orders')}
    >
      <Text style={styles.ordersButtonText}>View order history</Text>
    </Pressable>
  </>
) : null}
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
  item: {
    color: '#24221e',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e6dfd3',
  },
  total: {
    color: '#1d6747',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
  },
  note: {
    color: '#666666',
    lineHeight: 21,
    marginTop: 12,
  },
  button: {
    backgroundColor: '#1d6747',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  disabled: {
    opacity: 0.4,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  successMessage: {
  color: '#1d6747',
  marginTop: 16,
  lineHeight: 22,
},
ordersButton: {
  backgroundColor: '#e4f1e8',
  padding: 12,
  borderRadius: 10,
  alignItems: 'center',
  marginTop: 12,
},
ordersButtonText: {
  color: '#1d6747',
  fontWeight: 'bold',
},
});