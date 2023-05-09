import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";


function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  function scrollToSkills(event) {
    event.preventDefault();
    navigate('/');
    setTimeout(() => {
      const skillsSection = document.getElementById("skills");
      skillsSection.scrollIntoView({ behavior: "smooth" });
    }, 200);
  }
  
  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </button>
      </div>
      <div className="links">
        {location.pathname === "/" ? (
          <Link to="/" className="linkItem"> Home </Link>
        ): (
          <a href="/" className="linkItem"> Home </a>
        )}
        <Link to="/projects" className="linkItem"> Projects </Link>
        <Link to="/experience" className="linkItem"> Experience </Link>
        <a href="/#skills" className="linkItem" onClick={scrollToSkills}> Skills </a>
        <a href="#socialMedia" className="linkItem"> Contact </a>
      </div>
    </div>
  );
}

export default Navbar;
