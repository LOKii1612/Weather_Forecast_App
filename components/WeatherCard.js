// import React from 'react';
// import { View, Text } from 'react-native';
// import styles from '../styles/styles';

// export default function WeatherCard({ data }) {
//   return (
//     <View style={styles.card}>
//       <Text style={styles.title}>{data.name}</Text>
//       <Text>🌡 Temperature: {data.main.temp}°C</Text>
//       <Text>☁ Weather: {data.weather[0].description}</Text>
//       <Text>💧 Humidity: {data.main.humidity}%</Text>
//       <Text>🌬 Wind: {data.wind.speed} m/s</Text>
//     </View>
//   );
// }
import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../styles/styles';

export default function WeatherCard({ data }) {
  const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;

  return (
    <View style={styles.card}>
      <Text style={styles.city}>{data.name}</Text>
      <Image source={{ uri: iconUrl }} style={styles.weatherIcon} />

      <Text style={styles.temp}>{data.main.temp}°C</Text>
      <Text style={styles.description}>{data.weather[0].description}</Text>

      <View style={styles.detailsRow}>
        <Text style={styles.details}>💧 {data.main.humidity}% Humidity</Text>
        <Text style={styles.details}>🌬 {data.wind.speed} m/s Wind</Text>
      </View>
    </View>
  );
}
