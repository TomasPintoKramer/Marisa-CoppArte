// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCr-yLb99vjnW0SXh85BXUHWl97TC_8Ft8",
  authDomain: "marisacopparte.firebaseapp.com",
  projectId: "marisacopparte",
  storageBucket: "marisacopparte.appspot.com",
  messagingSenderId: "737789818575",
  appId: "1:737789818575:web:b8e87e061efd0e0c2f29ba",
  measurementId: "G-7DYNT1HYK6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getFirestore(app)
 const storage = getStorage(app)

const bucketName= "gs://marisacopparte.appspot.com/cuadros"


export default db;