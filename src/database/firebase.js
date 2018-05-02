import * as firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: "AIzaSyDvp7lHzpM5h7TF3AZ9clxUu8nCts5UNs4",
  authDomain: "expensify-7f8b6.firebaseapp.com",
  databaseURL: "https://expensify-7f8b6.firebaseio.com",
  projectId: "expensify-7f8b6",
  storageBucket: "expensify-7f8b6.appspot.com",
  messagingSenderId: "1076406452990"
};

firebase.initializeApp(config);

const database = firebase.database();

database.ref().set({
  name: 'Damien Shaw',
})