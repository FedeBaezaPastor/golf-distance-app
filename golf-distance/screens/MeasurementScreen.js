import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, StatusBar } from 'react-native';
import * as Location from 'expo-location';
import { getDistance } from 'geolib';
import { courses } from '../data/courses';

export default function MeasurementScreen({ route, navigation }) {
  const { courseId, holeNumber, courseColor } = route.params;
  const course = courses[courseId];
  const hole = course.holes.find(h => h.number === holeNumber);
  
  const [distance, setDistance] = useState(null);
  const [loading, setLoading] = useState(false);
  const [locationPermission, setLocationPermission] = useState(false);

  const isFirstHole = holeNumber === 1;
  const isLastHole = holeNumber === 9;

  useEffect(() => {
    requestLocationPermission();
  }, []);

  const requestLocationPermission = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status === 'granted') {
        setLocationPermission(true);
      } else {
        Alert.alert(
          'Permiso necesario',
          'Esta aplicación necesita acceso a tu ubicación para calcular distancias.'
        );
      }
    } catch (error) {
      Alert.alert('Error', 'No se pudo obtener el permiso de ubicación');
    }
  };

  const measureDistance = async () => {
    if (!locationPermission) {
      Alert.alert(
        'Permiso necesario',
        'Debes permitir el acceso a la ubicación para usar esta función'
      );
      return;
    }

    setLoading(true);
    try {
      const location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High,
      });

      const userPosition = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };

      const holePosition = {
        latitude: hole.lat,
        longitude: hole.lng,
      };

      const distanceInMeters = getDistance(userPosition, holePosition);
      setDistance(distanceInMeters);
    } catch (error) {
      Alert.alert('Error', 'No se pudo obtener tu ubicación. Intenta de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  const goToPreviousHole = () => {
    if (holeNumber > 1) {
      navigation.replace('Measurement', {
        courseId,
        holeNumber: holeNumber - 1,
        courseColor
      });
    }
  };

  const goToNextHole = () => {
    if (holeNumber < 9) {
      navigation.replace('Measurement', {
        courseId,
        holeNumber: holeNumber + 1,
        courseColor
      });
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: courseColor }]}>
      <StatusBar barStyle="light-content" backgroundColor={courseColor} />
      <Text style={styles.courseTitle}>{course.name}</Text>
      <Text style={styles.holeTitle}>Hoyo {hole.number}</Text>
      <Text style={styles.parText}>Par {hole.par}</Text>

      <View style={styles.measurementContainer}>
        <TouchableOpacity 
          style={[styles.button, loading && styles.buttonDisabled]}
          onPress={measureDistance}
          disabled={loading}
        >
          <Text style={[styles.buttonText, { color: courseColor }]}>
            {loading ? 'Midiendo...' : 'Medición'}
          </Text>
        </TouchableOpacity>

        {distance !== null && (
          <View style={styles.resultContainer}>
            <Text style={styles.distanceNumber}>{distance}</Text>
            <Text style={styles.distanceText}>
              {hole.par === 3 ? 'metros a centro de green' : 'metros a entrada de green'}
            </Text>
          </View>
        )}
      </View>

      <View style={styles.navigationContainer}>
        {!isFirstHole && (
          <TouchableOpacity 
            style={styles.navButtonLeft}
            onPress={goToPreviousHole}
          >
            <Text style={styles.arrowText}>◄</Text>
          </TouchableOpacity>
        )}
        
        {!isLastHole && (
          <TouchableOpacity 
            style={styles.navButtonRight}
            onPress={goToNextHole}
          >
            <Text style={styles.arrowText}>►</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  courseTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  holeTitle: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  parText: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 50,
  },
  measurementContainer: {
    alignItems: 'center',
    width: '100%',
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 60,
    borderRadius: 25,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  resultContainer: {
    marginTop: 40,
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: 20,
    borderRadius: 15,
    width: '100%',
  },
  distanceNumber: {
    fontSize: 64,
    fontWeight: 'bold',
    color: '#fff',
  },
  distanceText: {
    fontSize: 18,
    color: '#fff',
    marginTop: 10,
    textAlign: 'center',
  },
  navigationContainer: {
    position: 'absolute',
    bottom: 40,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },
  navButtonLeft: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },
  navButtonRight: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },
  arrowText: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
  },
});
