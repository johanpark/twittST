import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
const firebaseConfig = {
    // apiKey: process.env.REACT_APP_API_KEY,
    // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    // databaseURL: process.env.REACT_APP_DATABASE_URL,
    // projectId: process.env.REACT_APP_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_MESSAGIN_ID,
    // appId: process.env.REACT_APP_APP_ID
    apiKey: "AIzaSyBM10rZX4IXxsXDGkeRsb-nCUM_jr4MGeI",
    authDomain: "wittst-c418b.firebaseapp.com",
    databaseURL: "https://wittst-c418b.firebaseio.com",
    projectId: "wittst-c418b",
    storageBucket: "wittst-c418b.appspot.com",
    messagingSenderId: "204395477407",
    appId: "1:204395477407:web:595529cf6bd0842573e5aa"
  };
  firebase.initializeApp(firebaseConfig);

  export const firebaseInstance = firebase;
  export const authService = firebase.auth();
  export const dbService = firebase.firestore();