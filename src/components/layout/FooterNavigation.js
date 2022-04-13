import React from "react";
import classes from "./FooterNavigation.module.css";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../store/auth-context";

function FooterNavigation() {
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;
  return (
    <React.Fragment>
      <footer className={classes.footer}>
        <ul className={classes.ul}>
          {isLoggedIn && (
            <li>
              <NavLink to="/new-projects" activeClassName={classes.active}>
                Add Projects
              </NavLink>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <NavLink to="/all-contact" activeClassName={classes.active}>
                Messages
              </NavLink>
            </li>
          )}
        </ul>
      </footer>
    </React.Fragment>
  );
}

export default FooterNavigation;
