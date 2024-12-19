import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const ColorPicker = ({colors}) => {
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  return (
    <View style={styles.container}>
      <View style={styles.details}>
        <Text style={styles.heading}>Color: </Text>
        <Text
          style={[styles.selectedText, {color: selectedColor.toLowerCase()}]}>
          {selectedColor || 'None'}
        </Text>
      </View>
      <View style={styles.colorContainer}>
        {colors.map((color, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.colorBox,
              {backgroundColor: color.toLowerCase()},
              selectedColor === color && styles.selectedColorBox,
            ]}
            onPress={() => setSelectedColor(color)}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  details: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  colorContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  colorBox: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#fff',
 
  },
  selectedColorBox: {
    borderColor: '#000',
    borderWidth: 2,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  selectedText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5,
  },
});

export default ColorPicker;
