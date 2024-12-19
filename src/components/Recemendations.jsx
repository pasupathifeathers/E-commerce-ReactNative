import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {outProducts} from '../data/Products';

const Recemendations = ({productId}) => {
  const findProduct = outProducts.filter(pro => pro.id !== Number(productId));

  return (
    <View style={styles.recemendations}>
      <Text style={styles.title}>Recommendations</Text>
      {findProduct.map((item, index) => (
        <Product key={index} item={item} />
      ))}
    </View>
  );
};

const Product = ({item}) => {
  const [selectedImage, setSelectedImage] = useState(item.coverImage);

  return (
    <View style={styles.eachProduct}>
      <View style={styles.collectionItem}>
        <Image source={selectedImage} style={styles.collectionImage} />
        <View style={styles.additionalImagesContainer}>
          {item.images.map((image, idx) => (
            <TouchableOpacity
              key={idx}
              onPress={() => setSelectedImage(image.img)}
              style={[
                styles.imageWrapper,
                selectedImage === image.img && styles.selectedImageBorder,
              ]}>
              <Image style={styles.collectionImages} source={image.img} />
            </TouchableOpacity>
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
};

export default Recemendations;

const styles = StyleSheet.create({
  recemendations: {
    paddingVertical: 10,
  },
  title: {
    fontWeight: '500',
    fontSize: 18,
  },
  eachProduct: {
    marginVertical: 10,
  },
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
  imageWrapper: {
    borderRadius: 8,
  },
  selectedImageBorder: {
    borderWidth: 2,
    borderColor: 'black',
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

