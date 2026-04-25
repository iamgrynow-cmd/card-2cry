import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.12.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDGwpH-JYuYK4kkUpf3cCsp-Im4urQW9Lk",
  authDomain: "nexpay-crypto-card.firebaseapp.com",
  projectId: "nexpay-crypto-card",
  storageBucket: "nexpay-crypto-card.firebasestorage.app",
  messagingSenderId: "120822872109",
  appId: "1:120822872109:web:9079b4cf4f0cade9c620a4",
  measurementId: "G-KQE5VRLX4F"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  signOut,
  onAuthStateChanged
};
