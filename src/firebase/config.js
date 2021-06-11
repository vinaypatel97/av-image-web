import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyA5rzqZgfl5gO3p5P03aTMJSKNj4qIRWcI",
  authDomain: "image-gram-c9765.firebaseapp.com",
  projectId: "image-gram-c9765",
  storageBucket: "image-gram-c9765.appspot.com",
  messagingSenderId: "760228334761",
  appId: "1:760228334761:web:130ab106db77159ea82db8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };