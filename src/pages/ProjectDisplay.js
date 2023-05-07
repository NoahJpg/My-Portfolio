import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GithubIcon from "@material-ui/icons/GitHub";
import { IconButton, Link } from '@material-ui/core';
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <IconButton>
          <Link href={project.link} target="_blank">
            <GithubIcon />
          </Link>
        </IconButton>
    </div>
  );
}

export default ProjectDisplay;