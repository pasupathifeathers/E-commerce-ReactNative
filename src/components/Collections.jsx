import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  useWindowDimensions,
  Platform,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const Collections = ({products}) => {
  const renderItem = (item, index) => (
    <View key={index} style={styles.eachProduct}>
      <View style={styles.collectionItem}>
        <Image source={item.frontImage} style={styles.collectionImage} />
        <View style={styles.additionalImagesContainer}>
          {item.images.map((image, idx) => (
            <Image key={idx} style={styles.collectionImages} source={image} />
          ))}
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.brand}>{item.brand}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.pastPrice}>Rs.{item.pastPrice}</Text>
          <Text style={styles.currentPrice}>Rs.{item.currentPrice}</Text>
          <Text style={styles.offer}>{item.offer}% Off</Text>
        </View>
        <View style={styles.buttonGroup}>
          <TouchableOpacity style={styles.wishBtn}>
            <Text style={styles.buttonTextWish}>Wishlist</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.addBtn}>
            <Text style={styles.buttonTextBag}>Add to Bag</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
  console.log(useWindowDimensions(), 'useWindowDimensions');
  console.log(Dimensions.get('window'), 'useWindowDimensions');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Our Collections</Text>
      <FlatList
        data={products}
        style={styles.productsCollection}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => renderItem(item, index)}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

export default Collections;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: Platform.OS === 'ios' ? '' : '',
  },
  eachProduct: {
    marginBottom: 20,
  },
  productsCollection: {},
  collectionItem: {
    width: '100%',
    flexDirection: 'row',
    gap: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  collectionImage: {
    width: 'auto',
    flexGrow: 1,
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 8,
  },
  additionalImagesContainer: {
    flexDirection: 'column',
    gap: 10,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  collectionImages: {
    width: 80,
    height: 80,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  collectionTitle: {
    fontSize: 16,
    marginTop: 5,
    fontWeight: '600',
    textAlign: 'center',
  },

  content: {
    gap: 5,
  },
  name: {
    fontSize: 20,
    fontWeight: '500',
  },
  brand: {
    fontSize: 18,
    fontWeight: '400',
  },
  priceContainer: {
    backgroundColor: 'Red',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  pastPrice: {
    fontSize: 16,
    textDecorationLine: 'line-through',
    color: '#848484',
  },
  currentPrice: {
    fontSize: 18,
    fontWeight: '500',
  },
  offer: {
    color: '#3bbf30',
    fontSize: 18,
  },
  buttonGroup: {
    flexDirection: 'row',
    gap: 10,
  },
  wishBtn: {
    borderWidth: 2,
    borderColor: '#002482',
    flexGrow: 1,
    borderRadius: 5,
  },
  addBtn: {
    backgroundColor: '#002482',
    flexGrow: 1,
    borderRadius: 5,
  },
  buttonTextWish: {
    textAlign: 'center',
    padding: 5,
    fontWeight: '500',
  },
  buttonTextBag: {
    textAlign: 'center',
    padding: 5,
    color: '#fff',
    fontWeight: '500',
  },
});
