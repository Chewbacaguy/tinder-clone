import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyC2Sfyz6RQTUHOabIZJMrsoO5kOc4hPfZs",
    authDomain: "tinder-clone-e868e.firebaseapp.com",
    databaseURL: "https://tinder-clone-e868e.firebaseio.com",
    projectId: "tinder-clone-e868e",
    storageBucket: "tinder-clone-e868e.appspot.com",
    messagingSenderId: "690607170156",
    appId: "1:690607170156:web:53cf0dbde56a3e17926e49",
    measurementId: "G-5KPNQCFW08"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();
  export default database;

  