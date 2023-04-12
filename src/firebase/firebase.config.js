// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_GaEbvsNmpeCtIPVSbtlNkWjmpynYhrc",
  authDomain: "dragon-news-a460e.firebaseapp.com",
  projectId: "dragon-news-a460e",
  storageBucket: "dragon-news-a460e.appspot.com",
  messagingSenderId: "861990621965",
  appId: "1:861990621965:web:40d7b472c5c97049a5d644"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;