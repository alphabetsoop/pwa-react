import firebase from "firebase";
 
const firebaseConfig = { 
  apiKey: "AIzaSyAx_DafugLAAuF-6yoKJ5I5txR4-9FS8f0", 
  authDomain: "atomic-voice-305505.firebaseapp.com", 
  databaseURL: "https://atomic-voice-305505-default-rtdb.firebaseio.com", 
  projectId: "atomic-voice-305505", 
  storageBucket: "atomic-voice-305505.appspot.com", 
  messagingSenderId: "654579013198", 
  appId: "1:654579013198:web:f7b29bca08c076015b951f", 
  measurementId: "G-SF26KH527V" 
}; 
 
let firebaseApp

if (!firebase.apps.length) {
    firebaseApp = firebase.initializeApp(firebaseConfig);
} else {
    firebaseApp = firebase.app(); // already initialized
}

firebase.auth().onAuthStateChanged( (user) => {
    if (!user) {
        console.log("No one is signed in, currentUser gives", firebase.auth().currentUser)
    } else {
        console.log(firebase.auth().currentUser)
    }
    window.user = user; 
    console.log("window.user", window.user)
});

// firebase.analytics();

const db = firebaseApp.firestore();
export default db;
export const firebaseAuth = firebase.auth 
 