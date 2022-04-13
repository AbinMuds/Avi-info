import "./MainNavigation.css";
import { useContext, useState, Fragment } from "react";
import AuthContext from "../../store/auth-context";
import { Link } from "react-router-dom";

function MainNavigation() {
  const [click, setClick] = useState(false);
  const authCtx = useContext(AuthContext);
  const handleClick = () => {
    setClick(!click);
  };
  const closeMobileMenu = () => setClick(false);
  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    setClick(false);
    authCtx.logout();
    //redirect the user optional
  };

  return (
    <Fragment>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          AM
          <i className="fab fa-firstdraft" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/projects"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
              Contact
            </Link>
          </li>
          {!isLoggedIn && (
            <li className="nav-item">
              <Link
                to="/auth"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          )}
          {isLoggedIn && (
            <li className="nav-item">
              <Link className="nav-links-mobile" onClick={logoutHandler}>
                Logout
              </Link>
            </li>
          )}
          {isLoggedIn && (
            <li className="nav-item">
              <button onClick={logoutHandler} className="btn-links">
                Logout
              </button>
            </li>
          )}
          {!isLoggedIn && (
            <li className="nav-item">
              <Link to="auth">
                <button className="btn-links">Sign Up</button>
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </Fragment>
  );
}

export default MainNavigation;
