import React, { useState, useEffect } from 'react';
import axios from 'axios'; // You may need to install axios

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState(''); // You can set a default city

  useEffect(() => {
    // Replace 'YOUR_API_KEY' with your OpenWeatherMap API key
    const apiKey = '268a8e5bdfe2c8956ad80e2fe76b1e15';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl)
      .then(response => setWeatherData(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, [city]);

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <div className="weather">
      <label htmlFor="cityInput">Enter City: </label>
      <input
        type="text"
        id="cityInput"
        value={city}
        onChange={handleCityChange}
      />

      {weatherData && (
        <div>
          <h2>{weatherData.name}, {weatherData.sys.country}</h2>
          <p>{weatherData.weather[0].description}</p>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Feels Like: {weatherData.main.feels_like}°C</p>
          <p>Max Temp: {weatherData.main.temp_max}°C</p>
          <p>Min Temp: {weatherData.main.temp_min}°C</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
