import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD3wPNFvvbBfaj7b6E94FPh2LFFXvKJKHQ",
    authDomain: "dishdelight-9c3f4.firebaseapp.com",
    projectId: "dishdelight-9c3f4",
    storageBucket: "dishdelight-9c3f4.appspot.com",
    messagingSenderId: "861557291389",
    appId: "1:861557291389:web:9c3f4b0b0b0b0b0b0b0b"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
