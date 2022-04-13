import React, { useEffect } from "react";
import NoProjectsFound from "../components/projects/NoProjectsFound";
import Projects from "../components/projects/Projects";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getAllProjects } from "../lib/api";

function AllProjects() {
  const {
    sendRequest,
    status,
    data: loadedProjects,
    error,
  } = useHttp(getAllProjects, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if (
    status === "completed" &&
    (!loadedProjects || loadedProjects.length === 0)
  ) {
    return <NoProjectsFound />;
  }

  return <Projects projects={loadedProjects} />;
}

export default AllProjects;
