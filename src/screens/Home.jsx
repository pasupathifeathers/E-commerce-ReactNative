import {FlatList, SafeAreaView, StyleSheet} from 'react-native';
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Category from '../components/Category';
import {banners} from '../data/Banners';
import TreandingProducts from '../components/TreandingProducts';
import DealsOfDay from '../components/DealsOfDay';
import OurCollections from '../components/OurCollections';
import {useDispatch, useSelector} from 'react-redux';
import {
  product,
  treandingProducts,
  dealOfDayProducts,
} from '../features/product.slice';
import Carousel from '../components/customProductComponent/Carousel';

const Home = ({navigation}) => {
  const selector = useSelector(product);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(treandingProducts());
    dispatch(dealOfDayProducts());
  },[])
  const {categories, treandingProduct, dealsOfDay, products} =
    selector;

  const all = [
    {
      key: 'category',
      component: <Category navigation={navigation} categories={categories} />,
    },
    {key: 'carosule', component: <Carousel data={banners} />},
    {
      key: 'trendingProducts',
      component: (
        <TreandingProducts product={treandingProduct} navigation={navigation} />
      ),
    },
    {
      key: 'dealsOfDay',
      component: <DealsOfDay product={dealsOfDay} navigation={navigation} />,
    },
    {
      key: 'ourCollections',
      component: <OurCollections product={products} navigation={navigation} />,
    },
  ];

  return (
    <SafeAreaView style={{flex: 1}}>
      <Navbar navigation={navigation} />
      <FlatList
        data={all}
        renderItem={({item}) => item.component}
        contentContainerStyle={styles.flatListContainer}
        initialNumToRender={20}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
