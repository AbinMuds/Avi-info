import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import CreateProject from "../components/projects/CreateProject";
import useHttp from "../hooks/use-http";
import { addProject } from "../lib/api";

function NewProject() {
  const { sendRequest, status } = useHttp(addProject);
  const history = useHistory();

  useEffect(() => {
    if (status === "completed") {
      history.push("/projects");
    }
  }, [status, history]);

  const addProjectHandler = (projectData) => {
    sendRequest(projectData);
  };

  return (
    <CreateProject
      isLoading={status === "pending"}
      onAddProject={addProjectHandler}
    />
  );
}

export default NewProject;
