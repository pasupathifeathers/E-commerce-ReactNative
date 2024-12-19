import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
const profile = require('../assets/img/navbar/profile.png');
const searchIcon = require('../assets/img/navbar/search.png');

const Navbar = ({navigation}) => {
  const onNavigate = navigate => {
    navigation.navigate(navigate)
  }
  return (
    <View style={styles.navbarVontainer}>
      <Pressable
        onPress={() => onNavigate('Profile')}
        style={styles.profileContainer}>
        <Image style={styles.profileImage} source={profile} />
        <Text style={styles.profileText}>pasupathi</Text>
      </Pressable>
      <Pressable onPress={() => onNavigate('Search')}>
        <Image source={searchIcon} style={styles.searchIcon} />
      </Pressable>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  navbarVontainer: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
  },
  profileImage: {
    width: 30,
    height: 30,
  },
  searchIcon: {
    width: 25,
    height: 25,
  },
  profileText: {
    textTransform: 'capitalize',
    fontSize: 18,
  },
});
