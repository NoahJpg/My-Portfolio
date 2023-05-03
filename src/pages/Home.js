import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { IconButton, Link } from '@material-ui/core';
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hello, My Name is Noah</h2>
        <div className="prompt">
          <p>A software developer with a love for practical applicatioins.</p>
          <IconButton>
            <Link href="https://www.linkedin.com/in/noahatkinson/" target="_blank">
              <LinkedInIcon />
            </Link>
          </IconButton>
          <IconButton>
            <Link href="mailto:noahatkinson1.1@gmail.com">
              <EmailIcon />
            </Link>
          </IconButton>
          <IconButton>
            <Link href="https://github.com/NoahJpg" target="_blank">
              <GithubIcon />
            </Link>
          </IconButton>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, HTML, CSS, NPM, BootStrap, Redux
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, .NET, MySQL, Firebase
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, C#, Python, C, TypeScript</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;