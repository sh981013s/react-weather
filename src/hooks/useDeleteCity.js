import {db} from '../firebase/firebaseConfig';
import {doc, deleteDoc} from 'firebase/firestore';


export const useDeleteCity = () => {
  const deleteCity = async(id) => {
    const ref = doc(db, 'city', id)
    await deleteDoc(ref);
  }

  return {deleteCity}
}
