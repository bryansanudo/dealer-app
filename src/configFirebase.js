import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDqV4KA4xkd7yWLw5ggKOiQxJlRH06XGTE",
  authDomain: "dealer-app-a4d2a.firebaseapp.com",
  projectId: "dealer-app-a4d2a",
  storageBucket: "dealer-app-a4d2a.appspot.com",
  messagingSenderId: "963100383143",
  appId: "1:963100383143:web:7ad96640643eca75804882",
};
const appFirebase = initializeApp(firebaseConfig);
export const auth = getAuth(appFirebase);
export const db = getFirestore(appFirebase);
export const storage = getStorage(appFirebase);
