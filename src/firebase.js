import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getStorage} from "firebase/storage";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBb6L7VSstgXmIZVbtLF-1x2Z4KMeHHOIU",
    authDomain: "flash-chat-app-64e1b.firebaseapp.com",
    projectId: "flash-chat-app-64e1b",
    storageBucket: "flash-chat-app-64e1b.appspot.com",
    messagingSenderId: "418504041560",
    appId: "1:418504041560:web:574465e69264b144e8d62d",
    measurementId: "G-67KEJK1LTH",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
