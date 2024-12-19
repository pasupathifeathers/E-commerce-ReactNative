import {StyleSheet, Text, View, FlatList, Image, Pressable} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import { useSelector } from 'react-redux';
import {product} from '../features/product.slice';
const Products = ({navigation, route}) => {
  
  const {id} = route.params;
    const selector = useSelector(product);
    const {products} = selector;

  // const pro = outProducts.filter(
  //   product => product.category.toLowerCase() === id.toLowerCase(),
  // );


  const routeFunction=(productID)=>{
    navigation.navigate("product",{id:productID})


  }
 

  const renderItem = ({item, index}) => (
    <Pressable onPress={() => routeFunction(item.id)} style={styles.productWrapper}>
      <Image source={item.coverImage} style={styles.coverImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>₹{item.latestPrice}</Text>
      {item.pastPrice && (
        <Text style={styles.pastPrice}>₹{item.pastPrice}</Text>
      )}
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={<Header navigation={navigation} />}
        data={products}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:5
  },
  categoryTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  flatListContent: {
    justifyContent: 'space-between',
    paddingBottom: 20,
  },
  productWrapper: {
    flex: 1,
   
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    padding: 5,
    alignItems: 'center',
  
  },
  coverImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  productName: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  productPrice: {
    marginTop: 5,
    fontSize: 14,
    color: 'green',
    fontWeight: 'bold',
  },
  pastPrice: {
    fontSize: 12,
    color: 'gray',
    textDecorationLine: 'line-through',
  },
});
