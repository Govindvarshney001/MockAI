import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "mockai-f19c9.firebaseapp.com",
  projectId: "mockai-f19c9",
  storageBucket: "mockai-f19c9.firebasestorage.app",
  messagingSenderId: "13400297047",
  appId: "1:13400297047:web:92e63b7ff19a0cdbf25d12",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };