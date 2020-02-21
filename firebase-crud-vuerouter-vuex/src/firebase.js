import firebase from 'firebase/app';
import firestore from 'firebase/firestore'
  // Your web app's Firebase configuration
  const  firebaseConfig = {
    apiKey: "AIzaSyAJ95o87GA7TQye9Awy28fIrLvOxQOq1kI",
    authDomain: "crud-vue-fdcf1.firebaseapp.com",
    databaseURL: "https://crud-vue-fdcf1.firebaseio.com",
    projectId: "crud-vue-fdcf1",
    storageBucket: "crud-vue-fdcf1.appspot.com",
    messagingSenderId: "1086130854515",
    appId: "1:1086130854515:web:dc50dd9d9b2ea5a1b3a806"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig)

  export default firebaseApp.firestore()

