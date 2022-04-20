import { Fragment } from "react";
import FooterNavigation from "./FooterNavigation";
// import FooterPage from "./FooterPage";
import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";

function Layout(props) {
  return (
    <Fragment>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
      <FooterNavigation />
      {/* <FooterPage /> */}
    </Fragment>
  );
}

export default Layout;
