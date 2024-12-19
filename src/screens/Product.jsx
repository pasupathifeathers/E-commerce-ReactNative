import React, {useRef, useState} from 'react';
import {ScrollView,Image,StyleSheet,Text,View,Dimensions,SafeAreaView,FlatList} from 'react-native';
import SizeList from '../components/SizeList ';
import ColorPicker from '../components/customProductComponent/ColorPicker';
import Btn from '../components/customProductComponent/Btn';
import Carousel from '../components/customProductComponent/Carousel';
import Recemendations from '../components/Recemendations';
import { useSelector } from 'react-redux';
import { product } from '../features/product.slice';

const screenWidth = Dimensions.get('window').width;

const Product = ({navigation, route}) => {
  const {id} = route.params;
  const selector = useSelector(product);
  const {products} = selector;
    const findProduct = products.find(pro => pro.id === Number(id));


  if (!findProduct) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.errorText}>Product not found!</Text>
      </SafeAreaView>
    );
  }

  const {images,name,brand,latestPrice,pastPrice,discount,description,size,color,stock,tags,material,returnPolicy,shipping,} = findProduct


  return (
    <ScrollView style={styles.container}>

      {/* <Carousel data={images}/> */}
  

      <View style={styles.productDetails}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.brand}>Brand Name: {brand}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.pastPrice}>Rs. {pastPrice}</Text>
          <Text style={styles.latestPrice}>Rs. {latestPrice}</Text>
          <Text style={styles.discount}>{discount}% Off</Text>
        </View>

        <SizeList sizes={size} />

        <ColorPicker colors={['Red', 'Blue', 'Green', 'Yellow', 'Purple']} />

        <View style={styles.btnGroup}>
          <Btn name={'Wishlist'} color={'#000'} borderColor={'blue'}  borderWidth={1}/>
          <Btn name={'Add Cart'} color={'#fff'} bgcolor={'blue'} />
        </View>
        {/* <Text style={styles.detail}>
          Stock:{' '}
          {stock.available ? `In Stock (${stock.quantity})` : 'Out of Stock'}
        </Text>
        <Text style={styles.detail}>Material: {material}</Text>{' '}
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.detail}>Tags: {tags.join(', ')}</Text>
        <Text style={styles.detail}>
          Shipping: {shipping.cost} (Delivery in {shipping.estimatedDelivery})
        </Text>
        <Text style={styles.detail}>Return Policy: {returnPolicy}</Text> */}


        <Recemendations productId={id}/>
      </View>
    </ScrollView>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  carousel: {
    position: 'relative',
  },
  carouselImage: {
    width: screenWidth,
    height: 400,
    resizeMode: 'cover',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#ccc',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#000',
    width: 20,
  },
  productDetails: {
    padding: 10,
    flex: 1,
    gap: 5,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  brand: {
    fontSize: 16,
    marginVertical: 5,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pastPrice: {
    fontSize: 14,
    textDecorationLine: 'line-through',
    color: '#848484',
    marginRight: 10,
  },
  latestPrice: {
    fontSize: 18,
    fontWeight: '500',
    marginRight: 10,
  },
  discount: {
    color: '#3bbf30',
  },
  description: {
    fontSize: 16,
    lineHeight: 22,
  },
  detail: {
    fontSize: 16,
    marginVertical: 5,
  },
  errorText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 18,
    color: 'red',
  },
  btnGroup:{
    flex:1,
    flexDirection:"row",
    gap:10,
    marginTop:5

  }
});
