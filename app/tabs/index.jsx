import FoodCard from '../../components/FoodCard';
import { foods } from '../../data/foods';
import React from 'react';
import { StyleSheet, Text, View, Pressable ,ScrollView} from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

function openMenu() {
  router.push('/tabs/menu');
}
  return (  
<ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}> 

      <Text style={styles.eyebrow}>UNIBITES · CAMPUS CANTEEN</Text>
      <Text style={styles.title}>Good food. Between classes.</Text>
      <Text style={styles.description}>
           A little taste of campus, always close by.
      </Text>

<View style={styles.banner}>
  <Text style={styles.bannerEyebrow}>TODAY ON CAMPUS</Text>
  <Text style={styles.bannerTitle}>
    Fresh picks for your study break
  </Text>
  <Text style={styles.bannerDescription}>
    Browse the menu and save your favourites. Everything works offline.
  </Text>

  <Pressable style={styles.menuButton} onPress={openMenu}>
    <Text style={styles.menuButtonText}>Explore the menu →</Text>
  </Pressable>
</View>


<Text style={styles.sectionTitle}>Student favourites</Text>

{foods.slice(0, 3).map((food) => (
  <FoodCard key={food.id} food={food} />
))}
<View style={styles.footer}>
  <Pressable onPress={() => router.push('/about')}>
    <Text style={styles.footerText}>About this project →</Text>
  </Pressable>
</View>
</ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
  fontSize: 16,
  color: '#666666',
},
card: {
  backgroundColor: '#abd2f1',
  padding: 18,
  borderRadius: 12,
  marginTop: 24,
},
cardTitle: {
  color: '#ffffff',
  fontSize: 20,
  fontWeight: 'bold',
  marginBottom: 8,
},
button: {
  backgroundColor: '#69bedb',
  padding: 10,
  borderRadius: 8,
  marginTop: 14,
},
buttonText: {
  color: '#253326',
  fontWeight: 'bold',
  textAlign: 'center',
},
sectionTitle: {
  color: '#24221e',
  fontSize: 20,
  fontWeight: 'bold',
  marginTop: 24,
  marginBottom: 12,
},
scrollContent: {
  padding: 20,
  paddingBottom: 34,
},
eyebrow: {
  color: '#1d6747',
  fontSize: 13,
  fontWeight: 'bold',
  letterSpacing: 1.5,
  marginBottom: 14,
},
banner: {
  backgroundColor: '#1d6747',
  padding: 20,
  borderRadius: 22,
  marginTop: 24,
  marginBottom: 24,
},
bannerEyebrow: {
  color: '#cfe8d3',
  fontSize: 12,
  fontWeight: 'bold',
  letterSpacing: 1.2,
  marginBottom: 12,
},
bannerTitle: {
  color: '#ffffff',
  fontSize: 23,
  fontWeight: 'bold',
  marginBottom: 8,
},
bannerDescription: {
  color: '#e3eee5',
  fontSize: 16,
  lineHeight: 22,
},
menuButton: {
  backgroundColor: '#f2b34d',
  alignSelf: 'flex-start',
  paddingVertical: 12,
  paddingHorizontal: 16,
  borderRadius: 12,
  marginTop: 16,
},
menuButtonText: {
  color: '#253326',
  fontWeight: 'bold',
},
footer: {
  alignItems: 'center',
  paddingVertical: 30,
  marginTop: 20,
},
footerText: {
  color: '#1d6747',
  fontSize: 16,
  fontWeight: 'bold',
},
});