// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZkA6EG5DqOdhO9MoRZp2jwNqE8i_Vd5s",
  authDomain: "twitter-ae81f.firebaseapp.com",
  projectId: "twitter-ae81f",
  storageBucket: "twitter-ae81f.appspot.com",
  messagingSenderId: "398537996387",
  appId: "1:398537996387:web:ef9b576ec9fad9bad2e056"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };