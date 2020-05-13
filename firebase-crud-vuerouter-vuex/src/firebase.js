import firebase from 'firebase/app';
import 'firebase/firestore';
  // Your web app's Firebase configuration
 
  const firebaseConfig = {
    apiKey: "AIzaSyBW8oQFVE5x1KJJX4xBbfN7qfrcdk5-v1A",
    authDomain: "crud-vue-13645.firebaseapp.com",
    databaseURL: "https://crud-vue-13645.firebaseio.com",
    projectId: "crud-vue-13645",
    storageBucket: "crud-vue-13645.appspot.com",
    messagingSenderId: "930595877001",
    appId: "1:930595877001:web:3474ab857907527d9fd658"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db= firebase.firestore();

  export {db}

