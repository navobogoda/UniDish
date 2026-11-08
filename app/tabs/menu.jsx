import { StyleSheet, Text, View,TextInput } from 'react-native';
import React, { useState } from 'react';

export default function MenuScreen() {
  const [searchText, setSearchText] = useState('');
  const foods = [
  { id: 'rice', name: 'Rice and Curry', canteen: 'Main Canteen', price: 450 },
  { id: 'chicken-kottu', name: 'Chicken Kottu', canteen: 'Main Canteen', price: 680 },
  { id: 'vegetable-kottu', name: 'Vegetable Kottu', canteen: 'Main Canteen', price: 520 },
];

const filteredFoods = foods.filter((food) => {
  const search = searchText.toLowerCase();

  return (
    food.name.toLowerCase().includes(search) ||
    food.canteen.toLowerCase().includes(search)
  );
});
  return (
    
    <View style={styles.container}>
     <Text style={styles.title}>Campus Menu</Text>

     <Text style={styles.subtitle}>Food available around campus</Text>
    
    <Text style={styles.count}>{foods.length} dishes available</Text>
   <TextInput
      style={styles.search}
      placeholder="Search food or canteen"
      value={searchText}
      onChangeText={setSearchText}
/>
     {filteredFoods.map((food) => (
  <View key={food.id} style={styles.foodCard}>
    <Text style={styles.foodName}>{food.name}</Text>
    <Text style={styles.foodDetails}>
      {food.canteen} · Rs. {food.price}
    </Text>
  </View>
))}

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
subtitle: {
  color: '#666666',
  fontSize: 16,
  marginBottom: 12,
},
count: {
  color: '#666666',
  marginBottom: 12,
},
search: {
  backgroundColor: '#ffffff',
  borderWidth: 1,
  borderColor: '#d8d2c8',
  borderRadius: 10,
  padding: 12,
  marginBottom: 14,
},
});