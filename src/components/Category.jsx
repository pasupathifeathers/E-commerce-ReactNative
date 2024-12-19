import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import React from 'react';
import { categoryIcon} from '../data/category';

const Category = ({navigation, categories}) => {
 
  const onClickCategory = path => {
    navigation.navigate(
      path !== 'Category' ? 'CategoryProducts' : 'Category',
      path !== 'Category' ? {id: path} : {id: 'Categories'},
    );
  };

  return (
    <View style={styles.categoryContainer}>
      <TouchableOpacity
        onPress={() => onClickCategory('Category')}
        style={styles.category}>
        <Image style={styles.allImg} source={categoryIcon.img} />
        <Text>{categoryIcon.name}</Text>
      </TouchableOpacity>
      <FlatList
        data={categories}
        renderItem={({item, index}) => (
          <TouchableOpacity
            style={styles.eachCategory}
            onPress={() => onClickCategory(item.name)}>
            <Image style={styles.allImg} source={item.img} key={index} />
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  categoryContainer: {
    flexDirection: 'row',
    gap: 10,
    paddingHorizontal: 10,
  },
  allImg: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  eachCategory: {
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
  category: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
});
