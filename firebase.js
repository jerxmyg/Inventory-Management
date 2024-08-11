// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8SyQWHAbJ336jwSIuTW-pJJQXX7KOaMw",
  authDomain: "inventory-management-6cc14.firebaseapp.com",
  projectId: "inventory-management-6cc14",
  storageBucket: "inventory-management-6cc14.appspot.com",
  messagingSenderId: "1082949717457",
  appId: "1:1082949717457:web:e15f9995de9a0a8e81e4f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore}