//Integração do Firebase ao React

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firebase"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLwUS9qV2rBIGERoguOBulDafo7PF_mRE",
  authDomain: "miniblog-23c2c.firebaseapp.com",
  projectId: "miniblog-23c2c",
  storageBucket: "miniblog-23c2c.appspot.com",
  messagingSenderId: "543530177843",
  appId: "1:543530177843:web:85ec67f573f686bef89a46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize database
const db = getFirestore(app)

export { db }