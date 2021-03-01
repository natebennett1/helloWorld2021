import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
  apiKey: "AIzaSyDWrhWhomdIEkraT5YU3_cwMNrw_jOkIX8",
  authDomain: "helloworld2021-ba411.firebaseapp.com",
  projectId: "helloworld2021-ba411",
  storageBucket: "helloworld2021-ba411.appspot.com",
  messagingSenderId: "864565047128",
  appId: "1:864565047128:web:dba6befd737b6e1b253f2d",
  measurementId: "G-49ERS2R75J"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const db = firebase.firestore();
