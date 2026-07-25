import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyANxpBMycBdyE3UY0ziVtzIkWz9hCZYKMs",
  authDomain: "sac-tvm.firebaseapp.com",
  projectId: "sac-tvm",
  storageBucket: "sac-tvm.firebasestorage.app",
  messagingSenderId: "308355600333",
  appId: "1:308355600333:web:accd4575621dce611ebe84"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
