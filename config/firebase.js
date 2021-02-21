import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDshtVAuVxMEb1CKhBAaHfQCVdLyCWjQAM",
    authDomain: "solvert.firebaseapp.com",
    projectId: "solvert",
    storageBucket: "solvert.appspot.com",
    messagingSenderId: "291677259136",
    appId: "1:291677259136:web:3bf2d67874def8f219ad65",
    measurementId: "G-QBEHX2PZ1C",
};

let firebaseApp

if (!firebase.apps.length) {
    firebaseApp = firebase.initializeApp(firebaseConfig);
} else {
    firebaseApp = firebase.app(); // already initialized
}

// firebase.analytics();

const db = firebaseApp.firestore();
export default db;
