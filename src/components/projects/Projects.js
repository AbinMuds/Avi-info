import React, { Fragment } from "react";
import ProjectItem from "./ProjectItem";
import classes from "./Projects.module.css";

function Projects(props) {
  return (
    <Fragment>
      <ul className={classes.list}>
        {props.projects.map((project) => (
          <ProjectItem
            key={project.id}
            id={project.id}
            title={project.title}
            link={project.link}
            image={project.image}
            language={project.language}
            description={project.description}
          />
        ))}
      </ul>
    </Fragment>
  );
}

export default Projects;
