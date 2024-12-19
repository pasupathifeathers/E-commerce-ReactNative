import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const OurCollections = ({product, navigation}) => {
  const onClickProduct = productId => {
    navigation.navigate('Products', {id: productId});
  };
  return (
    <View style={styles.container}>
      <Text style={styles.Title}>Our Collections</Text>
      <View style={styles.containerProduct}>
        {product.slice(0, 4)?.map((pro, ind) => (
          <TouchableOpacity
            onPress={() => onClickProduct(pro.id)}
            key={ind}
            style={styles.itemContainer}>
            <Image source={pro.coverImage} style={styles.image} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default OurCollections;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    gap: 10,
  },
  containerProduct: {
    flexDirection: 'row',
    flexWrap: 'wrap',

    gap: 10,
    justifyContent: 'space-between',
  },
  Title: {
    fontWeight: 600,
    fontSize: 20,
  },
  itemContainer: {
    width: '45%',
    flexGrow: 1,

    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
  },
});
