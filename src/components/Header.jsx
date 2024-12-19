import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Header = ({navigation, topic}) => {
  const iconGroup = [
    {name: 'search1', type: 'Search'},
    {name: 'hearto', type: 'Notification'},
    {name: 'shoppingcart', type: 'Cart'},
  ];

  const onClickIcon = (path) => {
    if (path === 'back') {
      navigation.goBack();
    } else {
      navigation.navigate(path);
    }
  };

  return (
    <View style={styles.headerContainer}>
      <View style={styles.leftContainer}>
        <Pressable onPress={() => onClickIcon('back')}>
          <AntDesign name="arrowleft" color="#000" size={24} />
        </Pressable>
        <Text style={styles.headerText}>{topic}</Text>
      </View>
      <View style={styles.rightContainer}>
        {iconGroup.map((icon, index) => (
          <Pressable key={index} onPress={() => onClickIcon(icon.type)}>
            <AntDesign
              name={icon.name}
              color="#000"
              size={24}
              style={styles.icon}
            />
          </Pressable>
        ))}
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    textTransform:"capitalize"
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 20,
  },
});
