
// import firebase from 'firebase';
// const firebaseConfig = {
//     apiKey: "AIzaSyDXSPAEeiR84SvBnl7eyNTtfGLgZlBiiac",
//     authDomain: "disneyplus-clone-50cf0.firebaseapp.com",
//     projectId: "disneyplus-clone-50cf0",
//     storageBucket: "disneyplus-clone-50cf0.appspot.com",
//     messagingSenderId: "764116649426",
//     appId: "1:764116649426:web:1c656a286cc57a4efe340b",
//     measurementId: "G-7RFSJCZ5CG"
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);

// const db = firebaseApp.firestore();

// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();
// const storage = firebase.storage();

// export {auth , provider, storage};
// export default db;

import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDXSPAEeiR84SvBnl7eyNTtfGLgZlBiiac",
    authDomain: "disneyplus-clone-50cf0.firebaseapp.com",
    projectId: "disneyplus-clone-50cf0",
    storageBucket: "disneyplus-clone-50cf0.appspot.com",
    messagingSenderId: "764116649426",
    appId: "1:764116649426:web:1c656a286cc57a4efe340b",
    measurementId: "G-7RFSJCZ5CG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);
const auth = getAuth(app);

export {auth , provider, storage};
export default db;