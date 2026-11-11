import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { foods } from '../../data/foods';
import { useStore } from '../../context/StoreContext';

export default function OrdersScreen() {
  const { orders } = useStore();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Order history</Text>

      {orders.length === 0 ? (
        <Text style={styles.message}>No orders yet.</Text>
      ) : (
        orders.map((order) => (
          <View key={order.id} style={styles.card}>
            <Text style={styles.orderId}>Order {order.id}</Text>
            <Text style={styles.date}>
              {new Date(order.createdAt).toLocaleString()}
            </Text>

            {order.items.map((item) => {
              const food = foods.find((dish) => dish.id === item.foodId);

              return (
                <Text key={item.foodId} style={styles.item}>
                  {food ? food.name : item.foodId} × {item.quantity}
                </Text>
              );
            })}

            <Text style={styles.total}>Total · Rs. {order.total}</Text>
          </View>
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
  card: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  orderId: {
    color: '#24221e',
    fontSize: 17,
    fontWeight: 'bold',
  },
  date: {
    color: '#666666',
    fontSize: 13,
    marginTop: 6,
    marginBottom: 10,
  },
  item: {
    color: '#24221e',
    marginTop: 5,
  },
  total: {
    color: '#1d6747',
    fontWeight: 'bold',
    marginTop: 12,
  },
});