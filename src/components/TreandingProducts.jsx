import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';


const TrendingProducts = ({product, navigation}) => {

  const onClickProduct = produtId => {
    navigation.navigate('TodayTrend', {id: produtId});
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Trending Offers</Text>
      <FlatList
        data={product}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => (
          <Pressable
            style={styles.productContainer}
            onPress={() => onClickProduct(item.id)}>
            <Image source={item.coverImage} style={styles.productImage} />
          </Pressable>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default TrendingProducts;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productContainer: {
    marginRight: 10,
  },
  productImage: {
    width: 250,
    height: 250,
    resizeMode: 'cover',
  },
});
