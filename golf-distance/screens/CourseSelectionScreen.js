import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function CourseSelectionScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecciona el Recorrido</Text>
      
      <TouchableOpacity 
        style={[styles.button, styles.redButton]}
        onPress={() => navigation.navigate('HoleSelection', { courseId: 'rojo' })}
      >
        <Text style={styles.buttonText}>Recorrido Rojo</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.button, styles.greenButton]}
        onPress={() => navigation.navigate('HoleSelection', { courseId: 'verde' })}
      >
        <Text style={styles.buttonText}>Recorrido Verde</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2d5f2e',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 50,
  },
  button: {
    width: '80%',
    paddingVertical: 20,
    borderRadius: 15,
    marginVertical: 15,
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
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
