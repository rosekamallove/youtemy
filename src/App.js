import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import "./App.css";
import "./index.css";
import Dashboard from "./Pages/Dashboard/Dashboard";

firebase.initializeApp({
  apiKey: process.env.REACT_APP_MM_KEY,
  authDomain: "youtemy-bc22a.firebaseapp.com",
  projectId: "youtemy-bc22a",
  storageBucket: "youtemy-bc22a.appspot.com",
  messagingSenderId: "1024405097955",
  appId: "1:1024405097955:web:e7ba949495c50d122da4d6",
  measurementId: "G-RWDSSPKX4E",
});
const auth = firebase.auth();

function App() {
  const [user] = useAuthState(auth);
  return (
    <>
      {user ? <Dashboard /> : <LandingPage />}
      <SignOut />
    </>
  );
}

function SignOut() {
  return (
    auth.currentUser && (
      <button className="sign-out" onClick={() => auth.signOut()}>
        Sign Out
      </button>
    )
  );
}

function LandingPage() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <div>
      <div className="landing-title">
        <h1>Welcome to YouTemy</h1>
        <br />
        <h2>
          Your chance to stop wasting time and track your YouTube Learning
        </h2>{" "}
        <button className="sign-in" onClick={signInWithGoogle}>
          SignIn with Google <i class="fab fa-google"></i>
        </button>
      </div>
    </div>
  );
}

export default App;
