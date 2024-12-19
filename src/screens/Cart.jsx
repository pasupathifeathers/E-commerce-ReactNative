import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Cart = () => {
  return (
    <View style={styles.cartContainer}>
      <Text style={styles.heading}>Your Cart</Text>
      <View style={styles.cartItem}>
        <Image
          style={styles.cartImage}
          source={require('../assets/img/ourCollections/collection_1.png')}
        />

        <View style={styles.itemDetails}>
          <Text style={styles.itemName}>Blue T-shirt FROM LONDON INDIA</Text>
          <Text style={styles.itemPrice}>₹3000</Text>
        </View>

        <View style={styles.cartBtns}>
          <View style={styles.cartBtn}>
            <AntDesign name={'hearto'} size={20} color={'red'} />
            <AntDesign name={'delete'} size={20} color={''} />
          </View>
          <View>
            <Text>input</Text>
          </View>
        </View>
        <View></View>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  cartContainer: {
    flex: 1,
    padding: 15,
    backgroundColor: '#f8f8f8',
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#002482',
    marginBottom: 20,
  },
  cartItem: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginBottom: 15,
    alignItems: 'center',
    height: 120,
    gap: 5,
  },
  cartImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 15,
  },
  itemDetails: {
    flex: 1,
    justifyContent: 'space-between',
    height: '100%',
  },
  itemName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
  },
  itemPrice: {
    fontSize: 16,
    color: '#00B300',
    marginTop: 5,
  },
  removeButton: {
    backgroundColor: '#FF6347',
    borderRadius: 8,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 80,
  },
  removeText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  cartBtns: {
    justifyContent:"space-between",
    height:"100%"

  },
  cartBtn: {
    flexDirection:"row",
    gap:5
    

  },
});
