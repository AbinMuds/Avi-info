import React from "react";
import { Link } from "react-router-dom";
import Card from "../UI/Card";
import classes from "./ProjectItem.module.css";

function ProjectItem(props) {
  return (
    <li>
      <Card className={classes.item}>
        <div className={classes.image}>
          <Link to={`/projects/${props.id}`}>
            <img src={props.image} alt={props.title} />
          </Link>
        </div>

        <div className={classes.content}>
          <h1>{props.title}</h1>
          <p>{props.language}</p>
        </div>
        <div className={classes.content}>
          <Link className="btn" to={`/projects/${props.id}`}>
            Show Details
          </Link>
        </div>
      </Card>
    </li>
  );
}

export default ProjectItem;
