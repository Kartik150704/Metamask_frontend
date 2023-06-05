import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC7lut4w-9PeYmAAcGFOFCh_ssegAmQDY0",
    authDomain: "metamask-f7269.firebaseapp.com",
    databaseURL: "https://metamask-f7269-default-rtdb.firebaseio.com",
    projectId: "metamask-f7269",
    storageBucket: "metamask-f7269.appspot.com",
    messagingSenderId: "338227671316",
    appId: "1:338227671316:web:26aad2a1b39a7a493a1201",
    measurementId: "G-DQ6BFY96F6"
  };

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;
