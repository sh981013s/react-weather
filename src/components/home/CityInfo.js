import React, { useState } from 'react';
import axios from 'axios';

const CityInfo = () => {
  const [city, setCity] = useState('default');

  const getPositionSuccessed = (position) => {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const key = process.env.GOOGLE_MAP_KEY;
    let url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&language=en&key=${key}`;

    axios.get(url).then(({ data }) => {
      let len = data.results.length;
      let arr = data.results[len - 3].formatted_address.split(', ');
      console.log(arr[0]); // 현재 도시 콘솔 출력
      setCity(arr[0]);
    });
  };

  const getPositionFailed = () => {
    console.log('위치 정보를 가져올 수 없습니다.');
  };

  const getCurrLocation = () => {
    if (!navigator.geolocation) {
      console.log('현재 브라우저가 Geolocation API를 지원하지 않습니다.');
    } else {
      navigator.geolocation.getCurrentPosition(
        getPositionSuccessed,
        getPositionFailed
      );
    }
  };

  return (
    <div>
      <button onClick={getCurrLocation}>도시 찾기</button>
      <p>현재 도시는 {city}입니다.</p>
    </div>
  );
};

export default CityInfo;
