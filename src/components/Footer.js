import React from "react";
import { IconButton, Link } from '@material-ui/core';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
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
      <p> &copy; 2023 Noah Atkinson</p>
    </div>
  );
}

export default Footer;