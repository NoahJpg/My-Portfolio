import React from "react";


const links = [
  {
    url: "https://getbootstrap.com",
    imgSrc:"https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg",
    alt: "bootstrap",
    category: "front-end"
  },
  {
    url: "https://www.w3schools.com/cs/",
    imgSrc: "https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg",
    alt: "cSharp",
    category: "language"
  },
  {
    url: "https://www.w3schools.com/css/",
    imgSrc: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
    alt: "css3",
    category: "front-end"
  },
  {
    url: "https://dotnet.microsoft.com/",
    imgSrc: "https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original-wordmark.svg",
    alt: "dotnet",
    category: "back-end"
  },
  {
    url: "https://firebase.google.com/",
    imgSrc: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
    alt: "firebase",
    category: "back-end"
  },
  {
    url: "https://git-scm.com/",
    imgSrc: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
    alt: "git",
    category: "tool"
  },
  {
    url: "https://www.w3.org/html/",
    imgSrc: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
    alt: "html5",
    category: "front-end"
  },
  {
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    imgSrc: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    alt: "javascript",
    category: "language"
  },
  {
    url: "https://jestjs.io",
    imgSrc: "https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg",
    alt: "jest",
    category: "tool"
  },
  {
    url: "https://www.mongodb.com/",
    imgSrc: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
    alt: "mongodb",
    category: "back-end"
  },
  {
    url: "https://www.mysql.com/",
    imgSrc: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
    alt: "mysql",
    category: "back-end"
  },
  {
    url: "https://unity.com/",
    imgSrc: "https://www.vectorlogo.zone/logos/unity3d/unity3d-icon.svg",
    alt: "unity",
    category: "tool"
  },
  {
    url: "https://webpack.js.org",
    imgSrc: "https://raw.githubusercontent.com/devicons/devicon/d00d0969292a6569d45b06d3f350f463a0107b0d/icons/webpack/webpack-original-wordmark.svg",
    alt: "webpack",
    category: "tool"
  },
  {
    url: "https://reactjs.org/",
    imgSrc: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
    alt: "react",
    category: "front-end"
  },
  {
    url: "https://postman.com",
    imgSrc: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
    alt: "postman",
    category: "tool"
  },
  {
    url: "https://www.photoshop.com/en",
    imgSrc: "https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-line.svg",
    alt: "photoshop",
    category: "tool"
  },
  {
    url: "https://nodejs.org",
    imgSrc: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
    alt: "nodejs",
    category: "back-end"
  },
]

export default function Links({ category }) {
  const filteredLinks = links.filter(link => link.category === category);
  return (
    <div>
      {filteredLinks.map((link) => (
        <a href={link.url} target="_blank" rel="noreferrer">
          <img src={link.imgSrc} alt={link.alt} width="55" height="55" />
        </a>
      ))}
    </div>
  )
}