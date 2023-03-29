import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <Swiper
      style={styles.wrapper}
      showsButtons={false}
      loop={false}
      onIndexChanged={handleSlideChange}
    >
      <View style={styles.slide}>
        <Text style={styles.title}>Slide 1</Text>
        <Text style={styles.description}>Descripción de la slide 1</Text>
        <View
          style={[
            styles.circleAnimation,
            { backgroundColor: currentSlide === 0 ? '#2ecc71' : '#bdc3c7' },
          ]}
        />
      </View>
      <View style={styles.slide}>
        <Text style={styles.title}>Slide 2</Text>
        <Text style={styles.description}>Descripción de la slide 2</Text>
        <View
          style={[
            styles.circleAnimation,
            { backgroundColor: currentSlide === 1 ? '#2ecc71' : '#bdc3c7' },
          ]}
        />
      </View>
      <View style={styles.slide}>
        <Text style={styles.title}>Slide 3</Text>
        <Text style={styles.description}>Descripción de la slide 3</Text>
        <View
          style={[
            styles.circleAnimation,
            { backgroundColor: currentSlide === 2 ? '#2ecc71' : '#bdc3c7' },
          ]}
        />
      </View>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 32,
  },
  circleAnimation: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 16,
  },
});

export default Slider;
