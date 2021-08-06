import firebase from "firebase";
export const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE,
  authDomain: "youtemy-bc22a.firebaseapp.com",
  projectId: "youtemy-bc22a",
  storageBucket: "youtemy-bc22a.appspot.com",
  messagingSenderId: "1024405097955",
  appId: "1:1024405097955:web:e7ba949495c50d122da4d6",
  measurementId: "G-RWDSSPKX4E",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
