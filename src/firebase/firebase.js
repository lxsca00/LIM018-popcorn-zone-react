// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCh7DdOYomjt2GRaXXQrAxJuJ-WgNFLimM",
  authDomain: "popcorn-zone-react.firebaseapp.com",
  projectId: "popcorn-zone-react",
  storageBucket: "popcorn-zone-react.appspot.com",
  messagingSenderId: "30321256062",
  appId: "1:30321256062:web:c954826a963792d14c1a2f",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();


export { app, db, auth };
