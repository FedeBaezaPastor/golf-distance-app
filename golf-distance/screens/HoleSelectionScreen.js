import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { courses } from '../data/courses';

export default function HoleSelectionScreen({ route, navigation }) {
  const { courseId, courseColor } = route.params;
  const course = courses[courseId];

  return (
    <View style={[styles.container, { backgroundColor: courseColor }]}>
      <Text style={styles.title}>{course.name}</Text>
      <Text style={styles.subtitle}>Selecciona el Hoyo</Text>
      
      <View style={styles.holesGrid}>
        {course.holes.map((hole) => (
          <TouchableOpacity
            key={hole.number}
            style={styles.holeButton}
            onPress={() => navigation.navigate('Measurement', { 
              courseId, 
              holeNumber: hole.number,
              courseColor
            })}
          >
            <Text style={styles.holeNumber}>{hole.number}</Text>
            <Text style={styles.holePar}>Par {hole.par}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 30,
  },
  holesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  holeButton: {
    width: 100,
    height: 100,
    backgroundColor: '#fff',
    borderRadius: 15,
    margin: 8,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  holeNumber: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#2d5f2e',
  },
  holePar: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
});
