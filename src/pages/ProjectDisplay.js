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
      <a href={project.projLink} target="_blank" rel="noreferrer" >
        <img src={project.image} alt={project.name} />
      </a>
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <IconButton>
          <Link href={project.ghLink} target="_blank">
            <GithubIcon />
          </Link>
        </IconButton>
    </div>
  );
}

export default ProjectDisplay;