import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBnL6zH0XbI4e7P8NhTApKhRqn3p2Zdpmg",
  authDomain: "story-players-web.firebaseapp.com",
  projectId: "story-players-web",
  storageBucket: "story-players-web.firebasestorage.app",
  messagingSenderId: "618983422415",
  appId: "1:618983422415:web:7ed833ecfdc352313d3aba",
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app);
export const provide = new GoogleAuthProvider();