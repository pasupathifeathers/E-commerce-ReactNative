import {Button, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Btn = ({name, bgcolor, color, borderColor, icon, borderWidth}) => {
  return (
    <Pressable
      style={[
        styles.btnContainer,
        {
          backgroundColor: bgcolor || '#fff', 
          borderColor: borderColor || 'transparent', 
          borderWidth: borderWidth || 0, 
        },
      ]}>
      {icon && <View style={styles.iconContainer}>{icon}</View>}
      <Text style={[styles.btnText, {color: color || '#fff'}]}>{name}</Text>
    </Pressable>
  );
};

export default Btn;

const styles = StyleSheet.create({
  btnContainer: {
    flex:1,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  iconContainer: {
    marginRight: 5,
  },
  btnText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
