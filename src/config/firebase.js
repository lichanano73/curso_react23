import { initializeApp } from "firebase/app"
import 'firebase/compat/auth'
import 'firebase/compat/firestore'


//Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB4iSczg-qvRkB1vgt6oNtV9Z9rMqTEaIE",
    authDomain: "curso-react0723.firebaseapp.com",
    projectId: "curso-react0723",
    storageBucket: "curso-react0723.appspot.com",
    messagingSenderId: "288953942738",
    appId: "1:288953942738:web:f9326d52ad0aa8f41e630b"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;

