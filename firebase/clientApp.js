// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA43Dqu_anfSwwdYQARSSpVvy82ZdomXVc",
  authDomain: "stock-app-dc3af.firebaseapp.com",
  projectId: "stock-app-dc3af",
  storageBucket: "stock-app-dc3af.appspot.com",
  messagingSenderId: "19191751o8908",
  appId: "1:191917518908:web:c4612eaf25acea4da7d339",
  measurementId: "G-4DP31YVM32"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app)