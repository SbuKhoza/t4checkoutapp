import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { 
  Pressable, 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  ScrollView 
} from 'react-native';

export default function Checkout() {
  const navigation = useNavigation();
  const [selectedItems, setSelectedItems] = useState([
    {
      id: 1,
      name: 'iPhone 14 Pro',
      price: 24999,
      thumbnail: require('../assets/iphone.png'), 
      quantity: 1
    },
    {
      id: 2,
      name: 'MacBook Pro 14"',
      price: 54999,
      thumbnail: require('../assets/macbook.png'), 
      quantity: 1
    }
  ]);

  const calculateTotal = () => {
    return selectedItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  // const handleCheckout = () => {
  //   // Navigate to payment screen or process checkout
  //   console.log('Proceeding to checkout with items:', selectedItems);
  //   // You would typically use navigation here, e.g.:
  //   navigation.navigate('PaymentScreen', { items: selectedItems });
  // };



  const handleCheckout = () => {
    const totalAmount = calculateTotal();
    console.log('Proceeding to checkout with total:', totalAmount);
    navigation.navigate('PaymentScreen', { 
      items: selectedItems,
      total: totalAmount 
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.itemsContainer}>
        {selectedItems.map((item) => (
          <View key={item.id} style={styles.itemCard}>
            <Image 
              source={item.thumbnail} 
              style={styles.thumbnail} 
              resizeMode="contain"
            />
            <View style={styles.itemDetails}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>R {item.price.toLocaleString()}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.summaryContainer}>
        <Text style={styles.totalText}>
          Total: R {calculateTotal().toLocaleString()}
        </Text>
        <Pressable 
          style={({ pressed }) => [
            styles.checkoutButton,
            pressed && styles.buttonPressed
          ]}
          onPress={handleCheckout}
        >
          <Text style={styles.checkoutText}>Checkout</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  itemsContainer: {
    padding: 20,
  },
  itemCard: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 15,
    padding: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  thumbnail: {
    width: 80,
    height: 80,
    marginRight: 15,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 15,
    color: '#4CAF50',
    marginTop: 5,
  },
  summaryContainer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    backgroundColor: 'white',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'right',
  },
  checkoutButton: {
    width: '100%', 
    height: 50, 
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#4CAF50', 
    borderRadius: 10, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 10,
  },
  buttonPressed: {
    opacity: 0.7,
    backgroundColor: '#45a049',
  },
  checkoutText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  }
});