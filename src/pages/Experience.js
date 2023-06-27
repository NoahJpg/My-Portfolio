import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import "../styles/Experience.css";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#c0bbf3">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="June 2023 - Present"
          iconStyle={{ background: "#2144a7", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Engineer, Nombolo
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Seattle, WA</h4>
          <p>
            {" "}
            - Work on developing AI Integration for the React Native Application
          </p>
          <p> - Follow UI/UX team to implement their designs into the app</p>
          <p>
            - Self direct, test app, and brainstorm ways to improve
            user/business experience{" "}
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Jan 2023 - July 2023"
          iconStyle={{ background: "#4e51b8", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Development Bootcamp, Epicodus
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Remote / Seattle, WA
          </h4>
          <p>
            {" "}
            - Over 800 hours (27 weeks) of Front End/Back End web development.{" "}
          </p>
          <p>
            {" "}
            - Developed over 60 useful applications with C#/.Net, SQL,
            Javascript, React, and various tools.{" "}
          </p>
          <p>
            {" "}
            - Cultivated communication and team skills through group projects
            and daily pair programming.{" "}
          </p>
          <p>
            {" "}
            - Weekly code reviews, test driven development, implementing best
            practices.{" "}
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020 - 2023"
          iconStyle={{ background: "#2144a7", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Small Business Owner, Foggy Eyes Productions
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Seattle, WA</h4>
          <p>
            {" "}
            - Website design and merchandise site operation linking Shopify with
            Squarespace and Printful.{" "}
          </p>
          <p>
            {" "}
            - Budget management, marketing, business development,
            problem-solving.{" "}
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 - 2022"
          iconStyle={{ background: "#2144a7", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Director of Video, WealthPress
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Nocatee, FL</h4>
          <p>
            {" "}
            - Lead studios in high-level productions with multiple actors and
            crew.{" "}
          </p>
          <p>
            {" "}
            - Consulted with various brands to achieve the desired vision for
            launch of a new product.{" "}
          </p>
          <p>
            {" "}
            - Worked with developers to create an algorithmic stock trading
            system using AmiBroker Formula Language.{" "}
          </p>
          <p>
            {" "}
            - Managed and monitored social media accounts, implemented operation
            changes to increase CTR.{" "}
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2016 - 2019"
          iconStyle={{ background: "#2144a7", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Video Editor, Pragmatic Works
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Fleming Island, FL
          </h4>
          <p>
            {" "}
            - Edited and organized data engineering training videos for the
            learning platform.{" "}
          </p>
          <p>
            {" "}
            - Communicated with Fortune 500 leaders to manage their team’s
            WordPress accounts.{" "}
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017"
          iconStyle={{ background: "#4e51b8", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            St. Johns River State College
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Orange Park, FL
          </h4>
          <p> - Studied Computers and Information Technology </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
