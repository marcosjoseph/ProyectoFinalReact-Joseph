// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "proyecto-final-react-9d760.firebaseapp.com",
    projectId: "proyecto-final-react-9d760",
    storageBucket: "proyecto-final-react-9d760.appspot.com",
    messagingSenderId: "867971616515",
    appId: "1:867971616515:web:f912393a03e1fe6d892336"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const dataBaseFirestore = getFirestore(app);