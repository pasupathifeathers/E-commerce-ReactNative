import React from 'react';
import {FlatList, Image, StyleSheet, Text, View, Pressable} from 'react-native';
import {outProducts} from '../data/Products';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Header from '../components/Header';

const Wishlist = ({navigation}) => {
  let wishListItems = outProducts.filter(pro => pro.wishList === true);
  wishListItems = [...wishListItems, ...wishListItems]; 

  const renderItem = ({item}) => (
    <View style={styles.wishListItems}>
      <Image source={item.coverImage} style={styles.coverImage} />
      <View style={styles.productDeatils}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productSeller}>By {item.seller}</Text>
      </View>
      <View style={styles.productPriceContainer}>
        <Text style={styles.productPrice}>₹{item.latestPrice}</Text>
      </View>

      <Pressable
        style={styles.heartIcon}
        onPress={() => alert('Removed from wishlist')}>
        <AntDesign name="heart" size={24} color="red" />
      </Pressable>
    </View>
  );




  return (
    <View style={styles.wrapper}>
      <Header navigation={navigation} topic={'Wishlist'} />
      <FlatList
        data={wishListItems}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      />
      <View style={styles.footer}>
        <Pressable
          style={styles.addCartButton}
          onPress={() => alert('Added to Cart')}>
          <Text style={styles.addCartButtonText}>Add to Cart</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Wishlist;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 15,
    marginBottom: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
  },
  noNotifications: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noNotificationsText: {
    fontSize: 18,
    color: '#888',
  },
  wishListItems: {
    paddingVertical: 15,
    marginBottom: 15,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'relative',
  },
  productDeatils: {
    textAlign: 'center',
  },
  coverImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  productName: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  productSeller: {
    marginTop: 5,
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
  },
  productPriceContainer: {
    marginTop: 10,
  },
  productPrice: {
    fontSize: 16,
    color: 'green',
    fontWeight: 'bold',
  },
  heartIcon: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  footer: {
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addCartButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 5,
    width: '100%',
  },
  addCartButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  contentContainer: {
    paddingHorizontal: 15 
  },
});
