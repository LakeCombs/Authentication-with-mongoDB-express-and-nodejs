import React from "react";
import { Redirect, Route } from "react-router-dom";

function PirivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        localStorage.getItem("authToken") ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    />
  );
}

export default PirivateRoute;
