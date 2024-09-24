import { Text, View, StyleSheet} from "react-native";
import EvilIcons from '@expo/vector-icons/EvilIcons';

interface FoodItem {
  label: string;
  cal: string;
  brand: string;
};


const FoodListItem : React.FC<{ item: FoodItem }> = ({ item }) => {
  return(
    <View style={styles.foodViewItem}>
        <View style={{flex:1, gap: 5}}>
        <Text style={styles.text}>{item.label}</Text>
        <Text style={{color: 'dimgray'}}>{item.cal} cal, {item.brand}</Text>
        </View>
        <EvilIcons name="plus" size={40} color="royalblue" />
        </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#fff',
      justifyContent: 'center',
      padding: 10,
      gap: 5, 
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
  });


export default FoodListItem;  
