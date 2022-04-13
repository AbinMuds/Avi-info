import { Link } from "react-router-dom";
import classes from "./NoProjectsFound.module.css";

const NoProjectsFound = () => {
  return (
    <div className={classes.noProjects}>
      <p>No Projects found!</p>
      <Link className="btn" to="/new-projects">
        Add a Project
      </Link>
    </div>
  );
};

export default NoProjectsFound;
