import React from 'react';
import clearLight from '../assets/animated/weatherCategory/clear-light.gif';
import clearDark from '../assets/animated/weatherCategory/clear-dark.gif';
import cloudsDark from '../assets/animated/weatherCategory/clouds-dark.gif';
import cloudsLight from '../assets/animated/weatherCategory/clouds-light.gif';
import drizzleRainDark from '../assets/animated/weatherCategory/dirzzleRain-dark.gif';
import drizzleRainLight from '../assets/animated/weatherCategory/dirzzleRain-light.gif';
import snowDark from '../assets/animated/weatherCategory/snow-dark.gif';
import snowLight from '../assets/animated/weatherCategory/snow-light.gif';
import thunderStormDark from '../assets/animated/weatherCategory/tunderstorm-dark.gif';
import thunderStormLight from '../assets/animated/weatherCategory/tunderstorm-light.gif';

const WeatherIconFunc = (type) => {
  const typeToCompare = type.toLowerCase();

  switch (typeToCompare) {
    case 'thunderstorm':
      return [thunderStormLight, thunderStormDark];
    case 'drizzle':
      return [drizzleRainLight, drizzleRainDark];
    case 'rain':
      return [drizzleRainLight, drizzleRainDark];
    case 'snow':
      return [snowLight, snowDark];
    case 'atmosphere':
      return [clearLight, clearDark];
    case 'clear':
      return [clearLight, clearDark];
    case 'clouds':
      return [cloudsLight, cloudsDark];
    case 'mist':
      return [cloudsLight, cloudsDark];
    default:
      return 0;
  }
};

export default WeatherIconFunc;
