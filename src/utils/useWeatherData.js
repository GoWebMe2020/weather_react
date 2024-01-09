import { useState, useEffect } from 'react';
import axios from 'axios';

function useWeatherData(city, country) {
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

  useEffect(() => {
    const fetchWeatherData = async () => {
      if (!city || !country) {
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=metric`);
        setWeather(response.data);
        setError(null);
      } catch (err) {
        setError(err);
        setWeather({});
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, [city, country, apiKey]);

  return { weather, loading, error };
}

export default useWeatherData;
