import { StyleSheet, Text, View,TextInput,Pressable,ScrollView } from 'react-native';
import React, { useState } from 'react';
import { foods } from '../../data/foods';
import FoodCard from '../../components/FoodCard';

export default function MenuScreen() {
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [vegetarianOnly, setVegetarianOnly] = useState(false);
  
const filteredFoods = foods.filter((food) => {
  const search = searchText.toLowerCase();

  const matchesSearch =
    food.name.toLowerCase().includes(search) ||
    food.canteen.toLowerCase().includes(search);

 const matchesCategory =
  selectedCategory === 'All' || food.category === selectedCategory;

const matchesVegetarian = !vegetarianOnly || food.vegetarian;

return matchesSearch && matchesCategory && matchesVegetarian;
});
  return (
    
<ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
       <Text style={styles.title}>Campus Menu</Text>

     <Text style={styles.subtitle}>Food available around campus</Text>
    
      <Text style={styles.count}>
        {filteredFoods.length}{' '}
        {filteredFoods.length === 1 ? 'dish' : 'dishes'} available
      </Text>
      
   <TextInput
      style={styles.search}
      placeholder="Search food or canteen"
      value={searchText}
      onChangeText={setSearchText}

      
/>

{filteredFoods.length === 0 && (
  <Text style={styles.emptyMessage}>No dishes found. Try another search.</Text>
)}
<View style={styles.categoryRow}>
{['All', 'Meals', 'Short Eats', 'Snacks', 'Drinks','Desserts'].map((category) => (     <Pressable
      key={category}
      onPress={() => setSelectedCategory(category)}
      style={[
        styles.categoryButton,
        selectedCategory === category && styles.selectedCategoryButton,
      ]}
    >
      <Text style={styles.categoryText}>{category}</Text>
    </Pressable>
  ))}
</View>

<Pressable
  onPress={() => setVegetarianOnly(!vegetarianOnly)}
  style={[
    styles.categoryButton,
    vegetarianOnly && styles.selectedCategoryButton,
  ]}
>
  <Text
    style={[
      styles.categoryText,
      vegetarianOnly && styles.selectedCategoryText,
    ]}
  >
    {vegetarianOnly ? '✓ Vegetarian only' : 'Show vegetarian only'}
  </Text>
</Pressable>

{filteredFoods.map((food) => (
  <FoodCard key={food.id} food={food} />
))}

</ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fbf8f2',
  },
  scrollContent: {
  padding: 20,
  paddingBottom: 34,
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
emptyMessage: {
  color: '#666666',
  marginTop: 12,
  textAlign: 'center',
},
categoryRow: {
  flexDirection: 'row',
  marginBottom: 14,
},
categoryButton: {
  paddingVertical: 8,
  paddingHorizontal: 14,
  marginRight: 8,
  borderRadius: 20,
  backgroundColor: '#ffffff',
  borderWidth: 1,
  borderColor: '#d8d2c8',
},
selectedCategoryButton: {
  backgroundColor: '#1d6747',
  borderColor: '#1d6747',
},
categoryText: {
  color: '#333333',
  fontWeight: 'bold',
},
selectedCategoryText: {
  color: '#ffffff',
},
});