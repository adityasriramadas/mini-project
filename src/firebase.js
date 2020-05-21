import firebase from "firebase/app";
require("firebase/auth");


var firebaseConfig = {
    apiKey: "AIzaSyCptXVWpCDWAURz8DG9rmYXZj7oFct0OFk",
    authDomain: "mini-project-198b0.firebaseapp.com",
    databaseURL: "https://mini-project-198b0.firebaseio.com",
    projectId: "mini-project-198b0",
    storageBucket: "mini-project-198b0.appspot.com",
    messagingSenderId: "57013960415",
    appId: "1:57013960415:web:f6ad5ed702b3526d0eb36a",
    measurementId: "G-X6204RXN5D"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  export const auth = firebase.auth();
// export const db = firebase.firestore();
export default firebase;