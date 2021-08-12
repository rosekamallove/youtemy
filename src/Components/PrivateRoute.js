import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Redirect, Route } from "react-router-dom";
import firebase from "../firebase";

const auth = firebase.auth();
const PrivateRoute = ({ component: Component, ...rest }) => {
  const [userLoggedIn] = useAuthState(auth);

  return (
    <Route
      {...rest}
      render={(props) =>
        userLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );
};

export default PrivateRoute;
