import React from "react";
import classes from "./FooterNavigation.module.css";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../store/auth-context";
import List from "../UI/List";
import { Link } from "react-router-dom";

function FooterNavigation() {
  const authCtx = useContext(AuthContext);
  const linkedin = "https://www.linkedin.com/in/abinmuds/";
  const github = "https://github.com/AbinMuds";

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
          <a href={github}>
            <i class="fab fa-github"></i>
          </a>
        </List>
        <List>
          <a href={linkedin}>
            <i class="fab fa-linkedin"></i>
          </a>
        </List>
        <List>
          <Link to="/contact/new">Contact</Link>
        </List>
        <List>
          <Link to="/projects">Projects</Link>
        </List>
      </ul>
      <div className={classes.h5}>
        <h5>Copyright © 2020 Abinash Mudbhari. All rights reserved.</h5>
      </div>
    </footer>
  );
}

export default FooterNavigation;
