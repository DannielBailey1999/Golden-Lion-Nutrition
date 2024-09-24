import { TextInput, View, StyleSheet, FlatList, Text, Button} from "react-native";
import { Link } from 'expo-router';
import FoodListItem from "@/src/components/foodListItem";
import {useState} from 'react';



const foodItems = [
  {label: 'Pizza', cal: '75', brand: 'Dominos'},
  {label: 'Cake', cal: '100', brand: 'BaskinRobins'},
  {label: 'Bagel', cal: '80', brand: 'Scholskys'}
];
export default function Index() {
  const [search, setSearch] = useState('');
  const performSearch = () => {
    console.warn('searching for: ', search);

    setSearch(' ');
  }

  return (
    <View style={styles.container}>
      <TextInput 
      value={search} 
      onChangeText={setSearch}
      placeholder="Search" 
      style={styles.input}
      />
      {/* hides search button if youre not typing */}
       {search && <Button title="Search" onPress={performSearch} />} 
     
      {/* Food View Item */}
      <FlatList 
      data={foodItems}
      renderItem={({ item }) => <FoodListItem item={ item }/>}
      contentContainerStyle={{gap: 5}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#fff',
    padding: 10,
    gap: 10, 
  },
foodViewItem: {
  backgroundColor: 'gainsboro',
  padding: 10,
  borderRadius: 5,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
},
text: {
  fontWeight: 'bold', 
  fontSize: 16,
},
input: {
  backgroundColor: 'gainsboro',
  padding: 10, 
  borderRadius: 20,
}
})
