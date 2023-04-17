import {initializeApp, getApps} from "firebase/app";
import 'firebase/auth'
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA43Dqu_anfSwwdYQARSSpVvy82ZdomXVc",
  authDomain: "stock-app-dc3af.firebaseapp.com",
  projectId: "stock-app-dc3af",
  storageBucket: "stock-app-dc3af.appspot.com",
  messagingSenderId: "19191751o8908",
  appId: "1:191917518908:web:c4612eaf25acea4da7d339",
  measurementId: "G-4DP31YVM32"
};

let firebaseApp = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebaseApp
