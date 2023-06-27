import React from "react";
import { IconButton, Link } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia" id="socialMedia">
        <IconButton>
          <Link
            href="https://www.linkedin.com/in/noahatkinson/"
            target="_blank"
          >
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

        <IconButton className="downloadButton">
          <p className="resumeText">Download Resume</p>
          <Link href="/NoahAtkinsonResume.pdf" download>
            <CloudDownloadIcon />
          </Link>
        </IconButton>
      </div>
      <p> &copy; 2023 Noah Atkinson</p>
    </div>
  );
}

export default Footer;
