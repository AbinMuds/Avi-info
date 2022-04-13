import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ProjectDetails from "../components/projects/ProjectDetails";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getSingleProject } from "../lib/api";

function ProjectDetail() {
  const params = useParams();

  const { projectId } = params;

  const {
    sendRequest,
    status,
    data: loadedProject,
    error,
  } = useHttp(getSingleProject, true);

  useEffect(() => {
    sendRequest(projectId);
  }, [sendRequest, projectId]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered">{error}</p>;
  }

  if (!loadedProject.title) {
    return <p>No Project Found!</p>;
  }

  const details = {
    title: loadedProject.title,
    image: loadedProject.image,
    link: loadedProject.link,
    description: loadedProject.description,
    language: loadedProject.language,
  };

  return <ProjectDetails details={details} />;
}

export default ProjectDetail;
