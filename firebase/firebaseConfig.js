import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyB6fARkq_xoPnOLh4WUwEwPS5FF9lWfcCo",
    authDomain: "training-13331.firebaseapp.com",
    databaseURL: "https://training-13331.firebaseio.com",
    projectId: "training-13331",
    storageBucket: "training-13331.appspot.com",
    messagingSenderId: "68279360369",
    appId: "1:68279360369:web:63dfa31acceab7571bb4d0"
};

firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;