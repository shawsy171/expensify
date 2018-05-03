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

/* *************************************
  Set
************************************** */

database.ref()
  .set({
    name: 'Damien Shaw',
    age: 36,
    isSingle: false,
    job: 'Software Developer',
    location: {
      city: 'London',
      country: 'England'
    },
  }).then(() => {
    console.log('data has been set');
  }).catch((error) => {
    console.error('error: ', error);
  })


/* *************************************
  Remove
************************************** */

// database.ref('isSingle')
//   .remove()
//   .then(()=> {
//     console.log('data was removed');
//   }).catch((error) => {
//     console.error('error: ', error);
//   });

/* *************************************
  Update
************************************** */

// database.ref()
//   .update({
//     name: 'Mike know',
//     age: 16,
//   }).then(()=> {
//     console.log('data has been updated');
//   }).catch((error) => {
//     console.error('error: ', error);
//   });

/* *************************************

************************************** */