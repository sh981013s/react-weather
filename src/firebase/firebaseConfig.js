import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apikey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appID: process.env.APP_ID,
};

firebase.initializeApp(firebaseConfig);

const projectFireStore = firebase.firestore()


export const firebaseInstance = firebase;
export const authService = firebase.auth();
