import { Link } from "react-router-dom";
import classes from "./NoContactFound.module.css";

const NoContactFound = () => {
  return (
    <div className={classes.noContact}>
      <p>No Contact found!</p>
      <Link className="btn" to="/new-contact">
        Contact
      </Link>
    </div>
  );
};

export default NoContactFound;
