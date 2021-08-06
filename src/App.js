import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Footer from "./Components/Footer/Footer";
import "./css/App.css";
import "./css/index.css";
import { firebaseConfig } from "./firebase";
import Dashboard from "./Pages/Dashboard/Dashboard";

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
export { db };

function App() {
  const [userLoggedIn] = useAuthState(auth);

  let userId;
  let userName;
  const user = firebase.auth().currentUser;
  if (user !== null) {
    userId = user.uid;
    userName = user.displayName;
  }

  return (
    <div>
      {userLoggedIn ? (
        <Dashboard uid={userId} userName={userName} />
      ) : (
        <LandingPage />
      )}
    </div>
  );
}

function LandingPage() {
  const signInWithGoogle = async () => {
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
        </h2>
        <button className="sign-in" onClick={signInWithGoogle}>
          SignIn with Google <i className="fab fa-google"></i>
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default App;
