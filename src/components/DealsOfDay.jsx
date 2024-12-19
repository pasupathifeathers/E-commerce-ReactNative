

import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const DealsOfDay = ({product, navigation}) => {

  const onClickProduct=(productId)=>{
    navigation.navigate('TodayDeals',{id:productId});
  }
  return (
    <View style={styles.dealsContainer}>
      <Text style={styles.Title}>Deals Of The Day</Text>
      <View style={styles.dealsProduct}>
        {product.map((pro, ind) => (
          <TouchableOpacity
            onPress={() => onClickProduct(pro.id)}
            key={ind}
            style={styles.eachProduct}>
            <Image style={styles.productImage} source={pro.coverImage} />
            <Text style={styles.brand}>{pro.brand}</Text>
            <View style={styles.priceContainer}>
              <Text style={styles.priceSymbol}>Rs.</Text>
              <Text style={styles.price}>{pro.latestPrice}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default DealsOfDay;

const styles = StyleSheet.create({
  dealsContainer: {
    paddingHorizontal: 10,
    gap: 10,
  },
  Title: {
    fontWeight: 600,
    fontSize: 20,
  },
  dealsProduct: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 10,
  },
  eachProduct: {
    width: '45%',
    flexGrow:1,
    alignItems: 'center',
  },
  productImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  brand: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 14,
    color: 'green',
    marginTop: 3,
  },
  priceContainer:{
    flexDirection:"row",
    alignContent:"center",
    justifyContent:"center"
  },
  priceSymbol:{
    fontSize: 14,
    marginTop: 3,
  }
});
