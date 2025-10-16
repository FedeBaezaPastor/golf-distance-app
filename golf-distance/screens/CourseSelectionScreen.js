import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function CourseSelectionScreen({ navigation }) {
  const handleCourseSelect = (courseId, color) => {
    navigation.navigate('HoleSelection', { courseId, courseColor: color });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recorrido</Text>
      
      <View style={styles.buttonsContainer}>
        <TouchableOpacity 
          style={[styles.button, styles.redButton]}
          onPress={() => handleCourseSelect('rojo', '#c41e3a')}
        >
          <Text style={styles.buttonText}>Rojo</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.button, styles.greenButton]}
          onPress={() => handleCourseSelect('verde', '#4caf50')}
        >
          <Text style={styles.buttonText}>Verde</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2d5f2e',
    alignItems: 'center',
    paddingTop: 60,
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 80,
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  button: {
    width: 150,
    height: 150,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  redButton: {
    backgroundColor: '#c41e3a',
  },
  greenButton: {
    backgroundColor: '#4caf50',
  },
  buttonText: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
