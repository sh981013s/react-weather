import React from 'react';
import clear from '../assets/animated/transparentWeather/clear.gif';
import clouds from '../assets/animated/transparentWeather/clouds.gif';
import drizzleRain from '../assets/animated/transparentWeather/drizzleRain.gif';
import snow from '../assets/animated/transparentWeather/snow.gif';
import thunderStorm from '../assets/animated/transparentWeather/storm.gif';

const WeatherDetailIconFunc = (type) => {
  const typeToCompare = type.toLowerCase();

  switch (typeToCompare) {
    case 'thunderstorm':
      return thunderStorm;
    case 'drizzle':
      return drizzleRain;
    case 'rain':
      return drizzleRain;
    case 'snow':
      return snow;
    case 'atmosphere':
      return clear;
    case 'clear':
      return clear;
    case 'clouds':
      return clouds;
    default:
      return 0;
  }
};

export default WeatherDetailIconFunc;
