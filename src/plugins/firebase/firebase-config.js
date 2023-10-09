// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDL6AvAMU5nytK4SPK2lXlUZkYYN-x-2tw",
    authDomain: "hoggerio-2e572.firebaseapp.com",
    projectId: "hoggerio-2e572",
    storageBucket: "hoggerio-2e572.appspot.com",
    messagingSenderId: "948398081648",
    appId: "1:948398081648:web:d2f9e0dde5eb682177d6b5",
    measurementId: "G-CZWZMFT897"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);