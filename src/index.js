import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import BookmarksPage from "./Pages/BookmarksPage";
import CoursesPage from "./Pages/CoursesPage";
import ExplorePage from "./Pages/ExplorePage";
import SettingsPage from "./Pages/SettingsPage";

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
