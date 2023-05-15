import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { IconButton, Link } from '@material-ui/core';
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import { Card, CardContent, Typography } from "@material-ui/core";
import Links from "../helpers/IconList";
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
          <p className="homeDetails">A Full-Stack developer with a love for technology that makes life simpler.</p>
          <IconButton className="homeDetails">
            <Link href="https://www.linkedin.com/in/noahatkinson/" target="_blank">
              <LinkedInIcon className="iconButton" />
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

      <div className="skills" id="skills">
        <h1> Skills</h1>
        <div className="cardContainer">

          <Card className="card">
            <CardContent>
              <Typography variant="h5" component="h2">
                Front-End:
              </Typography>
              <Typography color="textSecondary" gutterBottom>
              </Typography>
              <Links category="front-end" />
            </CardContent>
          </Card>

          <Card className="card">
            <CardContent>
              <Typography variant="h5" component="h2">
                Back-End:
              </Typography>
              <Typography color="textSecondary" gutterBottom>
              APIs
              </Typography>
              <Links category="back-end" />
            </CardContent>
          </Card>

          <Card className="card">
            <CardContent>
              <Typography variant="h5" component="h2">
                Languages:
              </Typography>
              <Typography color="textSecondary" gutterBottom>
              </Typography>
              <Links category="language" />
            </CardContent>
          </Card>

          <Card className="card">
            <CardContent>
              <Typography variant="h5" component="h2">
                Tools:
              </Typography>
              <Typography color="textSecondary" gutterBottom>
              </Typography>
              <Links category="tool" />
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
}

export default Home;