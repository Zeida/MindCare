import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { Ionicons } from '@expo/vector-icons';

const MoodTracker = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [mood, setMood] = useState(null);

  const onDayPress = (day) => {
    setSelectedDay(day.dateString);
  }

  const onMoodPress = (selectedMood) => {
    setMood(selectedMood);
  }

  const moods = [
    { label: 'Muy mal', color: '#FF0000' },
    { label: 'Mal', color: '#FF5733' },
    { label: 'Normal', color: '#FFFF33' },
    { label: 'Bien', color: '#33FF57' },
    { label: 'Muy bien', color: '#00FF00' }
  ];

  const moodIcons = moods.map((mood, index) => (
    <Ionicons key={index} name="md-happy-outline" size={30} color={mood.color} style={styles.moodIcon} onPress={() => onMoodPress(mood)} />
  ));

  const markedDates = {};
  if (selectedDay) {
    markedDates[selectedDay] = { selected: true, selectedColor: mood ? mood.color : 'blue' };
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mood Tracker</Text>
      <Calendar
        onDayPress={onDayPress}
        markedDates={markedDates}
      />
      <View style={styles.moodIconsContainer}>
        {moodIcons}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  moodIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20
  },
  moodIcon: {
    marginHorizontal: 10
  }
});

export default MoodTracker;
