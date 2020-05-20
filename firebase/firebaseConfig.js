import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

import {
    API_KEY,
    AUTH_DOMAIN,
    DATABASE_URL,
    PROJECT_ID,
    STORAGE_BUCKET,
    MESSAGIN_SENDER_ID,
    APP_ID
} from 'react-native-dotenv'

const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    databaseURL: DATABASE_URL,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESSAGIN_SENDER_ID,
    appId: APP_ID
};

firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;