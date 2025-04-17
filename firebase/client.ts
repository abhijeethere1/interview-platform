// Import the functions you need from the SDKs you need
import { initializeApp ,getApp,getApps} from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBohb6LGcs8aETA7N_GQFxJw6FiO36zmZI",
  authDomain: "interview-platform-a117d.firebaseapp.com",
  projectId: "interview-platform-a117d",
  storageBucket: "interview-platform-a117d.firebasestorage.app",
  messagingSenderId: "13683035549",
  appId: "1:13683035549:web:0e57b02cc7e4c4ea65b374",
  measurementId: "G-6HB72983RN"
};

// Initialize Firebase
const app = !getApps.length ?initializeApp(firebaseConfig): getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);  
export const db = getFirestore(app);