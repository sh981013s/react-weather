import { useEffect, useState } from 'react';
import axios from 'axios';

const WEATHER_KEY = process.env.REACT_APP_OPENWEATHER_KEY;

const useFetch = (city) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [tmp, setTmp] = useState(null);
  const [error, setError] = useState(null);

  const query = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_KEY}&units=metric`;

  useEffect(() => {
    axios
      .get(query)
      .then((res) => {
        // setTmp(res.data);
        setLoading(false);
        setData({
          name: res.data.name,
          lat: res.data.coord.lat,
          lon: res.data.coord.lon,
          // fireId: fireIdList[idx],
          temp: res.data.main.temp,
          temp_min: res.data.main.temp_min,
          temp_max: res.data.main.temp_max,
          weather: res.data.weather[0].main,
          weather_desc: res.data.weather[0].description,
        });
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  console.log(data, '1data');

  return { loading, data, error };
};

export default useFetch;
