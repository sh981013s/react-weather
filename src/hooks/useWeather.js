import { useEffect, useState } from 'react';
import axios from 'axios';

const WEATHER_KEY = process.env.REACT_APP_OPENWEATHER_KEY;

const useFetch = (city) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const query = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_KEY}`;
  //   const tmp = `https://api.openweathermap.org/data/2.5/onecall?lat=37.5683&lon=126.9778&exclude=minutely,alerts&appid=c26763eb2ad8e5593d29d4670ddb3236`;

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
