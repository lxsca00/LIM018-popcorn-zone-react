// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  setDoc,
  updateDoc,
  addDoc,
  collection,
  Timestamp,
  deleteDoc,
  getDoc,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";

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

const provider = new GoogleAuthProvider();

export {
  app,
  db,
  auth,
  doc,
  setDoc,
  updateDoc,
  signInWithEmailAndPassword,
  addDoc,
  collection,
  Timestamp,
  createUserWithEmailAndPassword,
  signOut,
  deleteDoc,
  getDoc,
  onSnapshot,
  orderBy,
  query,
  signInWithPopup,
  provider,
};
