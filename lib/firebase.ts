import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB38h2hHaVaqrGpotg7k1xLGPEaB6n-IJA",
  authDomain: "ev-charger-326db.firebaseapp.com",
  projectId: "ev-charger-326db",
  storageBucket: "ev-charger-326db.firebasestorage.app",
  messagingSenderId: "505620534225",
  appId: "1:505620534225:web:5901c8b772afdad7a5c6f0",
  measurementId: "G-QELQD0YDV8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

export default app;
