import React from "react";
import classes from "./FooterNavigation.module.css";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../store/auth-context";
import { Link } from "react-router-dom";
import List from "../UI/List";

function FooterNavigation() {
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;
  return (
    <footer className={classes.footer}>
      <ul className={classes.ul}>
        {isLoggedIn && (
          <List>
            <NavLink to="/new-projects" activeClassName={classes.active}>
              Add Projects
            </NavLink>
          </List>
        )}
        {isLoggedIn && (
          <List>
            <NavLink to="/all-contact" activeClassName={classes.active}>
              Messages
            </NavLink>
          </List>
        )}
        <List>
          <Link>Linkedin</Link>
        </List>
        <List>
          <Link>Github</Link>
        </List>
      </ul>
      <div className={classes.h5}>
        <h5>Copyright © 2020 Abinash Mudbhari. All rights reserved.</h5>
      </div>
    </footer>
  );
}

export default FooterNavigation;
