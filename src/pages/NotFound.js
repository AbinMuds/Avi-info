import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

function NotFound() {
  return (
    <Fragment>
      <div className="centered">
        <p>Page not found</p>
      </div>
      <div className="centered">
        <NavLink to="/projects">
          <button className="btn">See My Projects</button>
        </NavLink>
      </div>
    </Fragment>
  );
}

export default NotFound;
