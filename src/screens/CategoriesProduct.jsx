import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import {useSelector} from 'react-redux';
import {product} from '../features/product.slice';
const CategoriesProduct = ({navigation,route}) => {
  const {id} = route.params;
  const selector = useSelector(product);
  const {products} = selector;

  const pro = products.filter(
    product => product.category.toLowerCase() === id.toLowerCase(),
  );
  const duplicatedProducts = [...pro, ...pro, ...pro, ...pro];

  const renderItem = ({item}) => (
    <View style={styles.productWrapper}>
      <Image source={item.coverImage} style={styles.coverImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>₹{item.latestPrice}</Text>
      {item.pastPrice && (
        <Text style={styles.pastPrice}>₹{item.pastPrice}</Text>
      )}
    </View>
  );
 
  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={<Header navigation={navigation} topic={id} />}
        data={duplicatedProducts}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};

export default CategoriesProduct;

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
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
    margin: 5,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
  },
  coverImage: {
    width: '100%',
    height: 150,
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
