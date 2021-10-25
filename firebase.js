// Import the functions you need from the SDKs you need
import { initializeApp ,getApp,getApps} from "firebase/app";
import getFirestore from 'firebase/firestore'
import getStorage from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "",
  authDomain: "insta-2-liza.firebaseapp.com",
  projectId: "insta-2-liza",
  storageBucket: "insta-2-liza.appspot.com",
  messagingSenderId: "111903228692",
  appId: "1:111903228692:web:a8cf44a54b26cf874af801"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app ,db , storage};
