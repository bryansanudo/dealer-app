import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDqV4KA4xkd7yWLw5ggKOiQxJlRH06XGTE",
  authDomain: "dealer-app-a4d2a.firebaseapp.com",
  projectId: "dealer-app-a4d2a",
  storageBucket: "dealer-app-a4d2a.appspot.com",
  messagingSenderId: "963100383143",
  appId: "1:963100383143:web:7ad96640643eca75804882",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
