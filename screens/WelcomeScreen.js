import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';

const WelcomeScreen = ({ navigation }) => {
  const handleEndReached = () => {
    navigation.navigate('Nav');
  };

  return (
    <Swiper
      loop={false}
      showsPagination={false}
      onIndexChanged={(index) => {
        if (index === 2) {
          handleEndReached();
        }
      }}
    >
      <View style={styles.slide}>
        <Text style={styles.text}>Welcome to my app!</Text>
      </View>
      <View style={styles.slide}>
        <Text style={styles.text}>Swipe to see more</Text>
      </View>
      <View style={styles.slide}>
        <Text style={styles.text}>Ready to get started?</Text>
      </View>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;
