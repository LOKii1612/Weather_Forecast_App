import React, { useState } from 'react';
import { View, TextInput, Button, Text, ActivityIndicator } from 'react-native';
import { fetchWeather } from '../services/weatherApi';
import WeatherCard from '../components/WeatherCard';
import styles from '../styles/styles';

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
      const data = await fetchWeather(city);
      setWeather(data);
    } catch (e) {
      setError('City not found or network error.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter city name"
        style={styles.input}
        value={city}
        onChangeText={setCity}
      />
      <Button title="Get Weather" onPress={getWeather} />
      {loading && <ActivityIndicator size="large" />}
      {error && <Text style={styles.error}>{error}</Text>}
      {weather && <WeatherCard data={weather} />}
    </View>
  );
}
