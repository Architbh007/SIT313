import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAOFBYofKi4BBBFgNrbOY-MekVm6a7vk7Y",
  authDomain: "fullstack-2e14f.firebaseapp.com",
  projectId: "fullstack-2e14f",
  storageBucket: "fullstack-2e14f.firebasestorage.app",
  messagingSenderId: "438764839401",
  appId: "1:438764839401:web:546a9a44ecbead5be5eb78",
  measurementId: "G-618EH8S1KE" 
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
