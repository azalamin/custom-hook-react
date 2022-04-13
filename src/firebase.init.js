import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCn7MyYdoahYOQUXg8OlA9HsiEg2avcI3c",
  authDomain: "custom-hook-firebase.firebaseapp.com",
  projectId: "custom-hook-firebase",
  storageBucket: "custom-hook-firebase.appspot.com",
  messagingSenderId: "249835342626",
  appId: "1:249835342626:web:a6113b95cd030ad9bbf37b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
