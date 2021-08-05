import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
import Navbar from "./Components/Navbar/Navbar";
import BookmarksPage from "./Pages/BookmarksPage/BookmarksPage";
import CoursesPage from "./Pages/CoursesPage/CoursesPage";
import ExplorePage from "./Pages/ExplorePage/ExplorePage";
import SettingsPage from "./Pages/SettingsPage/SettingsPage";
import VideoPlayer from "./Pages/VideoPlayer/VideoPlayer";
import Footer from './Components/Footer/Footer';

const Routing = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path={"/"} component={App} />
        <Route path={"/courses"} component={CoursesPage} />
        <Route path={"/explore"} component={ExplorePage} />
        <Route path={"/bookmarks"} component={BookmarksPage} />
        <Route path={"/settings"} component={SettingsPage} />
        <Route path={"/video-player"} component={VideoPlayer} />
      </Switch>
      <Footer />
    </Router>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  document.getElementById("root")
);
