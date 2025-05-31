// import React, { useState } from 'react';
// import * as Location from 'expo-location';



// import { View, TextInput, Button, Text, ActivityIndicator, StyleSheet, Image } from 'react-native';

// const API_KEY = '80f7d9d3c42d0b1be8dd99f713b9e760'; // Replace with your real API key from openweathermap.org

// export default function HomeScreen() {
//   const [city, setCity] = useState('');
//   const [weather, setWeather] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

// //   const getWeather = async () => {
// //     if (!city) return;
// //     setLoading(true);
// //     setError('');
// //     try {
// //       const response = await fetch(
// //         `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
// //       );
// //       if (!response.ok) throw new Error();
// //       const data = await response.json();
// //       setWeather(data);
// //     } catch (e) {
// //       setError('City not found or network error.');
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// const getWeather = async () => {
//   if (!city) return;

//   setLoading(true);
//   setError('');
//   setWeather(null);
  


//   try {
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
//     console.log('Fetching:', url); // log the exact API call

//     const response = await fetch(url);
//     const result = await response.json();

//     if (!response.ok) {
//       console.log('API returned error:', result);
//       throw new Error(result.message || 'Something went wrong');
//     }

//     console.log('Weather result:', result);
//     setWeather(result);
//   } catch (e) {
//     console.error('Fetch error:', e.message);
//     setError('City not found or network error.');
//   } finally {
//     setLoading(false);
//   }
// };

// const getWeatherByLocation = async () => {
//   setLoading(true);
//   setError('');
//   setWeather(null);

//   try {
//     const { status } = await Location.requestForegroundPermissionsAsync();
//     if (status !== 'granted') {
//       setError('Permission denied');
//       setLoading(false);
//       return;
//     }

//     const location = await Location.getCurrentPositionAsync({});
//     const { latitude, longitude } = location.coords;

//     const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`;
//     const response = await fetch(url);
//     const result = await response.json();

//     if (!response.ok) throw new Error(result.message || 'Failed');

//     setWeather(result);
//     setCity(result.name); // Optional: auto-fill city field with GPS result
//   } catch (e) {
//     console.error('GPS error:', e.message);
//     setError('Could not fetch location weather.');
//   } finally {
//     setLoading(false);
//   }
// };



//   return (
//     <View style={styles.container}>
//       <TextInput
//         placeholder="Enter city name"
//         style={styles.input}
//         value={city}
//         onChangeText={setCity}
//       />
//       <Button title="Use My Location" onPress={getWeatherByLocation} />
//       <Button title="Get Weather" onPress={getWeather} />
//       {loading && <ActivityIndicator size="large" />}
//       {error && <Text style={styles.error}>{error}</Text>}
//       {weather && (
//         <View style={styles.card}>
//           <Text style={styles.title}>{weather.name}</Text>
//           <Text>🌡 Temperature: {weather.main.temp}°C</Text>
//           <Text>☁ Weather: {weather.weather[0].description}</Text>
//           <Text>☁ Weather: {weather.weather[0].description}</Text>
// <Image
//   source={{ uri: `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png` }}
//   style={{ width: 100, height: 100 }}
// />



//           <Text>💧 Humidity: {weather.main.humidity}%</Text>
//           <Text>🌬 Wind: {weather.wind.speed} m/s</Text>
//         </View>
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 20,
//     backgroundColor: '#f0f8ff',
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#777',
//     borderRadius: 8,
//     padding: 10,
//     marginBottom: 10,
//     backgroundColor: '#fff',
//   },
//   error: {
//     color: 'red',
//     marginTop: 10,
//   },
//   card: {
//     marginTop: 20,
//     padding: 15,
//     backgroundColor: '#e0f7fa',
//     borderRadius: 10,
//     elevation: 2,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
// });


import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Image,
  StatusBar,
} from 'react-native';
import * as Location from 'expo-location';
import WeatherCard from '../components/WeatherCard';
import { fetchWeatherByCity, fetchWeatherByCoords } from '../services/weatherApi';
import styles from '../styles/styles';

const API_KEY = '80f7d9d3c42d0b1be8dd99f713b9e760';

export default function HomeScreen() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const getWeather = async () => {
    if (!city) return;
    setLoading(true);
    setError('');
    try {
      const data = await fetchWeatherByCity(city, API_KEY);
      setWeather(data);
    } catch (e) {
      setError('City not found or network error.');
    } finally {
      setLoading(false);
    }
  };

  const getWeatherByLocation = async () => {
    setLoading(true);
    setError('');
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setError('Location permission denied');
        return;
      }
      const location = await Location.getCurrentPositionAsync({});
      const data = await fetchWeatherByCoords(location.coords.latitude, location.coords.longitude, API_KEY);
      setWeather(data);
      setCity(data.name);
    } catch (e) {
      setError('Failed to fetch weather by location.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.gradientBackground}>
      <StatusBar barStyle="light-content" />
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView contentContainerStyle={styles.scroll}>
          <Text style={styles.header}>🌦️ Weather App</Text>

          <TextInput
            style={styles.input}
            placeholder="Enter city"
            placeholderTextColor="#ccc"
            value={city}
            onChangeText={setCity}
          />

          <View style={styles.buttonGroup}>
            <TouchableOpacity style={styles.button} onPress={getWeather}>
              <Text style={styles.buttonText}>Get Weather</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonSecondary} onPress={getWeatherByLocation}>
              <Text style={styles.buttonText}>Use My Location</Text>
            </TouchableOpacity>
          </View>

          {loading && <ActivityIndicator size="large" color="#fff" style={{ marginTop: 20 }} />}

          {error ? <Text style={styles.error}>{error}</Text> : null}

          {weather && <WeatherCard data={weather} />}
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}
