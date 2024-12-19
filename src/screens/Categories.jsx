import {FlatList, StyleSheet, View, Image, Text, Pressable} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import { useSelector } from 'react-redux';
import { product } from '../features/product.slice';

const Categories = ({  navigation ,route}) => {
  const {id} = route.params;
  const onProductClick=(routeName)=>{
    navigation.navigate('CategoryProducts', {id: routeName});

  }

  const selector=useSelector(product)
  const {categories} = selector
  return (
    <FlatList
      ListHeaderComponent={<Header navigation={navigation} topic={id} />}
      data={categories}
      keyExtractor={(item, index) => index.toString()}
      numColumns={2}
      renderItem={({item}) => (
        <Pressable
          onPress={() => onProductClick(item.name)}
          style={styles.itemContainer}>
          <Image source={item.img} style={styles.image} />
          <Text>{item.name}</Text>
        </Pressable>
      )}
    />
  );
};

export default Categories;

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1, 
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
 
  },
  image: {
    width:150,
    height: 200,
  },
  
});
