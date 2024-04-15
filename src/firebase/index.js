import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAWg57CzYgWODOV6Xi1vcaY6zW15K7ei_0",
  authDomain: "appoy-app-38109.firebaseapp.com",
  projectId: "appoy-app-38109",
  storageBucket: "appoy-app-38109.appspot.com",
  messagingSenderId: "1095898796552",
  appId: "1:1095898796552:web:4ed90b5e303c93d30df7bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const auth = getAuth(app);