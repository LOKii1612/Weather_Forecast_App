// const API_KEY = 'YOUR_API_KEY'; // Replace with your key from openweathermap.org

// export async function fetchWeather(city) {
//   const response = await fetch(
//     `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
//   );
//   if (!response.ok) throw new Error('Failed to fetch');
//   return await response.json();
// }

export async function fetchWeatherByCity(city, apiKey) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  const response = await fetch(url);
  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || 'Failed to fetch weather');
  }

  return result;
}

export async function fetchWeatherByCoords(lat, lon, apiKey) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  const response = await fetch(url);
  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || 'Failed to fetch location weather');
  }

  return result;
}
