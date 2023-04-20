import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBa0kGNxAskq4kWAbbuZE1lMKNje3N-ZBI",
    authDomain: "ciitpp.firebaseapp.com",
    projectId: "ciitpp",
    storageBucket: "ciitpp.appspot.com",
    messagingSenderId: "684072286803",
    appId: "1:684072286803:web:a8aa0296fd088bf86d24a6",
    measurementId: "G-VFRG037QLV"
  };

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

