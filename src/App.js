import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import "./css/App.css";
import "./css/index.css";
import Dashboard from "./Pages/Dashboard/Dashboard";
import LandingPage from "./Pages/LandingPage/LandingPage";

const auth = firebase.auth();

function App() {
  const [userLoggedIn] = useAuthState(auth);
  return <div>{userLoggedIn ? <Dashboard /> : <LandingPage />}</div>;
}

export default App;
