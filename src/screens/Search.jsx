import React, {useState} from 'react';
import {FlatList, Image, StyleSheet, Text, TextInput, View} from 'react-native';
import Header from '../components/Header';
import {useSelector} from 'react-redux';
import {product} from '../features/product.slice';


const Search = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState('');
    const selector = useSelector(product);
    const {products} = selector;
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

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
      <Header navigation={navigation} topic={'Search'} />
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search products"
          value={searchQuery}
          onChangeText={text => setSearchQuery(text)}
        />
      </View>
      <FlatList
        data={filteredProducts}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchContainer: {
    padding: 10,
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
    fontSize: 16,
  },
  flatListContent: {
    paddingBottom: 20,

  },
  productWrapper: {
    flex: 1,
    margin: 5,
    backgroundColor: '#f8f8f8',
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
