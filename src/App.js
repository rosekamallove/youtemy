import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import "./css/App.css";
import "./css/index.css";
import firebase from "./firebase";
import BookmarksPage from "./Pages/BookmarksPage/BookmarksPage";
import CoursesPage from "./Pages/CoursesPage/CoursesPage";
import Dashboard from "./Pages/Dashboard/Dashboard";
import ExplorePage from "./Pages/ExplorePage/ExplorePage";
import SettingsPage from "./Pages/SettingsPage/SettingsPage";
import VideoPlayer from "./Pages/VideoPlayer/VideoPlayer";
import PrivateRoute from "./PrivateRoute";
import { UserContext } from "./UserContext";
import {functions } from './firebase';

const auth = firebase.auth();
const db = firebase.firestore();
export { db };

function App() {
  const [userLoggedIn] = useAuthState(auth);
  const [uid, setUid] = useState("en");
  const value = { uid, setUid };
  return (
    <UserContext.Provider value={value}>
      <Router>
        <Navbar />
        <Switch>
          <Route
            exact
            path={"/"}
            render={() => {
              return userLoggedIn ? <Dashboard /> : <LandingPage />;
            }}
          />
          <PrivateRoute path={"/courses"} component={CoursesPage} />
          <PrivateRoute path={"/explore"} component={ExplorePage} />
          <PrivateRoute path={"/bookmarks"} component={BookmarksPage} />
          <PrivateRoute path={"/settings"} component={SettingsPage} />
          <PrivateRoute path={"/video-player"} component={VideoPlayer} />
        </Switch>
      </Router>
    </UserContext.Provider>
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
          <label className="signin-label">SignIn with{"  "}</label>
          <img
            className="google-logo"
            src="https://kgo.googleusercontent.com/profile_vrt_raw_bytes_1587515358_10512.png"
          ></img>
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default App;
