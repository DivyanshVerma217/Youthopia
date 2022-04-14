import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBBLFPvtQWr-oCecPezz9oVKpZgzJDIYgU",

  authDomain: "test2-d8c17.firebaseapp.com",

  projectId: "test2-d8c17",

  storageBucket: "test2-d8c17.appspot.com",

  messagingSenderId: "969344490744",

  appId: "1:969344490744:web:2b4ad365e36d44d3612f0d",

  measurementId: "G-6PZ9VRDHPE"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
