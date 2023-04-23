import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: 'AIzaSyB2-I-RQzqkhSeTMjy_99jwdGufyw5ndfM',
    authDomain: 'agamir-bangladesh.firebaseapp.com',
    projectId: 'agamir-bangladesh',
    storageBucket: 'agamir-bangladesh.appspot.com',
    messagingSenderId: '900845966130',
    appId: '1:900845966130:web:dedc6b52c451915f6e7d2b',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
