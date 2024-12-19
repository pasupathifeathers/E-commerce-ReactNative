import {
  Button,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const Banner = ({data}) => {
  return (
    <ImageBackground
      style={styles.bannerContainer}
      source={data.bannerOne?.img}>
      <View style={styles.content}>
        <Text style={styles.title}>{data.bannerOne.title}</Text>
        <Text style={styles.subHeading}>{data.bannerOne.subHeading}</Text>
        <Text style={styles.offer}>{data.bannerOne.offer}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.btnText}>{data.bannerOne.btnText}</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Banner;

const styles = StyleSheet.create({
  bannerContainer: {
    width: '100%',
    height: 250,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    gap: 10,
  },
  title: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  subHeading: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
  offer: {
    fontSize: 18,
    color: 'yellow',
    textAlign: 'center',
  },
  btnText: {
    fontSize: 16,
    color: 'white',

    textAlign: 'center',
    width: '',
  },
  button: {
    alignSelf: 'flex-start',
    borderColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 2,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 3,
    marginHorizontal: 'auto',
  },
});
