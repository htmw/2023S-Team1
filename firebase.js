// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGhk1-f76rifgx-FT8h7OAZspU_pkZ5HU",
  authDomain: "covsp-7477f.firebaseapp.com",
  projectId: "covsp-7477f",
  storageBucket: "covsp-7477f.appspot.com",
  messagingSenderId: "144802218625",
  appId: "1:144802218625:web:bc5cc8c09906f111854380",
  measurementId: "G-L2PNZ3PR3K"
};

// Initialize Firebasew
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth};