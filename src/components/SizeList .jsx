import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const SizeList = ({sizes}) => {
  const [selectedSize, setSelectedSize] = useState(null); 

  return (
    <View style={styles.container}>
      {sizes.map((size, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.sizeBox,
            selectedSize === size && styles.selectedSizeBox, 
          ]}
          onPress={() => setSelectedSize(size)} 
        >
          <Text style={styles.sizeText}>{size}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 5,
   
  },
  sizeBox: {
    backgroundColor: '#fff',
    width: 40,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    elevation: 1,
  },
  selectedSizeBox: {
    borderWidth: 2,
    borderColor: '#4caf50', 
  },
  sizeText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default SizeList;
