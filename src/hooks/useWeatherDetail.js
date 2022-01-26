import { useEffect, useState } from 'react';
import useWeatherIcon from './useWeatherIcon';
import axios from 'axios';

const WEATHER_KEY = process.env.REACT_APP_OPENWEATHER_KEY;

const WeatherDetailFunc = (lat, lon) => {
  const [image, setImage] = useState([]);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const query = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts,hourly&appid=${WEATHER_KEY}&units=metric`;

  useEffect(() => {
    axios
      .get(query)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);
  console.log(data, 'dd');

  return { loading, data, error };
};

export default WeatherDetailFunc;
