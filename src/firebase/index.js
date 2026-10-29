// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FB_API_KEY,
  authDomain: "chat-b39b2.firebaseapp.com",
  projectId: "chat-b39b2",
  storageBucket: "chat-b39b2.firebasestorage.app",
  messagingSenderId: "556784956418",
  appId: "1:556784956418:web:963b6ed758b97ecff6231b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth servisinin referansını al
export const auth = getAuth(app);

// google sağlayıcısını kur
export const provider = new GoogleAuthProvider();

// firestore servisinin referansını al
export const db = getFirestore(app);
