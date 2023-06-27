import React from "react";
import { useNavigate } from "react-router-dom";

function ProjectItem({ image, name, subName, id, link }) {
  const navigate = useNavigate();
  return (
    <div
      className="projectItem"
      onClick={() => {
        navigate("/project/" + id);
      }}
    >
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1> {name} </h1>
      <p> {subName}</p>
      <a href={link} target="_blank" rel="noreferrer" />
    </div>
  );
}

export default ProjectItem;
