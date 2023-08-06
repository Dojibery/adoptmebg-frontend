import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDBMyNGaGnBw8p6VRoY5xfvleXmMsvAjeg',
  authDomain: 'dogadoption-dcd38.firebaseapp.com',
  projectId: 'dogadoption-dcd38',
  storageBucket: 'dogadoption-dcd38.appspot.com',
  messagingSenderId: '989422506607',
  appId: '1:989422506607:web:a7a71c9ec30026d215739a',
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
