import { useEffect, useState } from 'react';
import axios from 'axios';

const WEATHER_KEY = process.env.REACT_APP_OPENWEATHER_KEY;

const useFetch = (city) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const query = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_KEY}&units=metric`;

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

  return { loading, data, error };
};

export default useFetch;
