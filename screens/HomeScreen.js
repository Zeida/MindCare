import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MoodTracker from '../components/MoodTracker';
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Bienvenido a mi app!</Text>
      <Text style={styles.subtitle}>Aquí encontrarás todo lo que necesitas.</Text>
      <MoodTracker/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    color: '#666',
  },
});

export default HomeScreen;
