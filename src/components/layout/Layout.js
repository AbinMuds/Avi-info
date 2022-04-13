import { Fragment, useContext } from "react";
import AuthContext from "../../store/auth-context";
import FooterNavigation from "./FooterNavigation";
import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";

function Layout(props) {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  return (
    <Fragment>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
      {isLoggedIn && <FooterNavigation />}
    </Fragment>
  );
}

export default Layout;
