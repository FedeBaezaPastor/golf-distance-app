import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { courses } from '../data/courses';

export default function HoleSelectionScreen({ route, navigation }) {
  const { courseId } = route.params;
  const course = courses[courseId];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{course.name}</Text>
      <Text style={styles.subtitle}>Selecciona el Hoyo</Text>
      
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.holesGrid}>
          {course.holes.map((hole) => (
            <TouchableOpacity
              key={hole.number}
              style={styles.holeButton}
              onPress={() => navigation.navigate('Measurement', { 
                courseId, 
                holeNumber: hole.number 
              })}
            >
              <Text style={styles.holeNumber}>{hole.number}</Text>
              <Text style={styles.holePar}>Par {hole.par}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2d5f2e',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 30,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  holesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  holeButton: {
    width: 100,
    height: 100,
    backgroundColor: '#fff',
    borderRadius: 15,
    margin: 10,
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
