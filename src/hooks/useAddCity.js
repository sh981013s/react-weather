import { useState } from 'react';
import axios from 'axios';
import { useAuthContext } from './useAuthContext';
import {db} from '../firebase/firebaseConfig';
import {collection, addDoc} from 'firebase/firestore';

export const useAddCity = () => {
  const { user } = useAuthContext();
  const [findError, setFindError] = useState(null);

  const addCity = (name) => {
    const key = process.env.REACT_APP_OPENWEATHER_KEY;
    const keyWord = name.split(',')[0];
    const url = `https://api.openweathermap.org/data/2.5/weather?appid=${key}&q=${keyWord}`
    axios.get(url).then(({ data })=> {
      addDoc(collection(db, 'city'), {
        title: data.id,
        userId: user.uid
      })
      console.log(user);
    }).catch(err => {
      setFindError(err.message);
    })

}

  return {addCity, findError}

}
