
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBQkBe9Qm7F9zgKobO9mjiQWl6z05Xrm9c",
  authDomain: "project01-6f006.firebaseapp.com",
  projectId: "project01-6f006",
  storageBucket: "project01-6f006.appspot.com",
  messagingSenderId: "1069313253894",
  appId: "1:1069313253894:web:468ef7753485509fba9987",
  measurementId: "G-WG9FSYL73F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export {app,auth}