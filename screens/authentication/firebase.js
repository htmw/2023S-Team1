// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import {getAuth} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZL0_UsY1oEXFNmXUtod5MdHJFzI-YofY",
  authDomain: "armor-8d52c.firebaseapp.com",
  projectId: "armor-8d52c",
  storageBucket: "armor-8d52c.appspot.com",
  messagingSenderId: "254732737258",
  appId: "1:254732737258:web:4d373b5756691c8627d593"
};

// Initialize Firebasew
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export {auth};