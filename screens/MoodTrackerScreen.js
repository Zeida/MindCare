import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const MoodTrackerScreen = () => {
  const [mood, setMood] = useState(3);

  const handleMoodChange = newMood => {
    setMood(newMood);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>How are you feeling today?</Text>
      <View style={styles.moodButtonsContainer}>
        <TouchableOpacity onPress={() => handleMoodChange(1)}>
          <Icon name="ios-sad" size={48} color={mood === 1 ? '#FF0000' : '#000000'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleMoodChange(2)}>
          <Icon name="ios-sad-outline" size={48} color={mood === 2 ? '#FF0000' : '#000000'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleMoodChange(3)}>
          <Icon name="ios-happy-outline" size={48} color={mood === 3 ? '#FFC107' : '#000000'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleMoodChange(4)}>
          <Icon name="ios-happy" size={48} color={mood === 4 ? '#FFC107' : '#000000'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleMoodChange(5)}>
          <Icon name="ios-heart" size={48} color={mood === 5 ? '#FF0000' : '#000000'} />
        </TouchableOpacity>
      </View>
      <Text style={styles.moodText}>{getMoodText(mood)}</Text>
    </View>
  );
};

const getMoodText = mood => {
  switch (mood) {
    case 1:
      return 'Very sad';
    case 2:
      return 'Sad';
    case 3:
      return 'Neutral';
    case 4:
      return 'Happy';
    case 5:
      return 'Very happy';
    default:
      return 'Unknown';
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  moodButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  moodText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default MoodTrackerScreen;
