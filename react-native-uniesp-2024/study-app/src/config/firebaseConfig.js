import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFireStore } from 'firebase/firestore'

const firebaseConfig = {
    FIREBASE_API_KEY,
    authDomain: "study-app-7a635.firebaseapp.com",
    projectId: "study-app-7a635",
    storageBucket: "study-app-7a635.firebasestorage.app",
    messagingSenderId: "991640502419",
    appId: "1:991640502419:web:02144e603d2d398fd90d66"
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app)
export const db = getFireStore(app)