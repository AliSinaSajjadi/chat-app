import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyCrzU3WXw5bjgYHpy-raKi34jfKyM9Tvzs",
  authDomain: "sinagram-600d7.firebaseapp.com",
  projectId: "sinagram-600d7",
  storageBucket: "sinagram-600d7.appspot.com",
  messagingSenderId: "125389546941",
  appId: "1:125389546941:web:41a214cddd44cfc9c31ed4",
  }).auth();
