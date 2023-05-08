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
        <section>
          <div className="content">
            <h2> Hello, My Name is Noah</h2>
            <h2> Hello, My Name is Noah</h2>
          </div>
        </section>
        <div className="prompt">
          <p className="homeDetails">A software developer with a love for practical applications.</p>
          <IconButton className="homeDetails">
            <Link href="https://www.linkedin.com/in/noahatkinson/" target="_blank">
              <LinkedInIcon />
            </Link>
          </IconButton>

          <IconButton className="homeDetails">
            <Link href="mailto:noahatkinson1.1@gmail.com">
              <EmailIcon />
            </Link>
          </IconButton>
          
          <IconButton className="homeDetails">
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
            <h2 className="skillTitle"> Front-End</h2>
            <span className="skillItems">
              ReactJS, HTML, CSS, NPM, BootStrap, Redux
            </span>
          </li>
          <li className="item">
            <h2 className="skillTitle">Back-End</h2>
            <span  className="skillItems">
              NodeJS, .NET, MySQL, Firebase
            </span>
          </li>
          <li className="item">
            <h2 className="skillTitle">Languages</h2>
            <span  className="skillItems">JavaScript, C#</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;