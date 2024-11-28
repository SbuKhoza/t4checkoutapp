import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

export default function Checkout() {
  return (
    <View style={styles.container}>
      <Pressable 
        style={({ pressed }) => [
          styles.checkoutButton,
          pressed && styles.buttonPressed
        ]}
        // Add onPress handler if needed
        // onPress={() => handleCheckout()}
      >
        <Text style={styles.checkoutText}>Checkout</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5', // Light background color
  },

  checkoutButton: {
    width: 200, 
    height: 50, 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4CAF50', 
    borderRadius: 10, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // For Android shadow
  },

  buttonPressed: {
    opacity: 0.7, // Visual feedback when pressed
    backgroundColor: '#45a049', // Slightly darker green when pressed
  },

  checkoutText: {
    color: 'white', // White text for contrast
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase', // Uppercase text for emphasis
  }
})