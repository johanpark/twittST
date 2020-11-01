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

    apiKey: "AIzaSyCCNcQGebXMC0K8mAnPZ2XnPBMnIAESW3Y",
    authDomain: "jhtwitt-ceb10.firebaseapp.com",
    databaseURL: "https://jhtwitt-ceb10.firebaseio.com",
    projectId: "jhtwitt-ceb10",
    storageBucket: "jhtwitt-ceb10.appspot.com",
    messagingSenderId: "875091035325",
    appId: "1:875091035325:web:67ac3aba05631a4263a3d4"
  };
  firebase.initializeApp(firebaseConfig);

  export const firebaseInstance = firebase;
  export const authService = firebase.auth();
  export const dbService = firebase.firestore();
