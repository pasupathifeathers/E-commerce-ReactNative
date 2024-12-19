import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {treandingProduct} from '../data/treandingProduct';

const TodayTrend = ({route}) => {
  const {id} = route.params;
  console.log(id);

  return (
    <View style={styles.container}>
      <FlatList
        data={treandingProduct}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <Image style={styles.image} source={item.img} />
        )}
      />
    </View>
  );
};

export default TodayTrend;

const styles = StyleSheet.create({
  container:{
    // padding:20,
    justifyContent:"center",
    alignContent:"center"

  },
  image: {
    width: "100%",
    objectFit:"cover",
    height: 400,
  //  marginBottom:20,
    resizeMode: 'cover',
  },
});


