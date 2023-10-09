import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

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

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;