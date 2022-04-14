import React from "react";
import Card from "../UI/Card";
import classes from "./ProjectDetails.module.css";

function ProjectDetails(props) {
  const linkToProj = props.details.link.toString();
  return (
    <section className={classes.detail}>
      <Card>
        <img src={props.details.image} alt={props.details.title} />
      </Card>
      <Card>
        <h1>{props.details.title}</h1>
        <a href={linkToProj}>
          <button className="btn">Project Link</button>
        </a>
      </Card>
      <Card>
        <h3>Languages used: {props.details.language}</h3>

        <p>{props.details.description}</p>
      </Card>
    </section>
  );
}

export default ProjectDetails;
