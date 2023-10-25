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
            - A do-it-all startup role implementing UX designs, troubleshooting
            backend services, and resolving client issues.
          </p>
          <p>
            {" "}
            - Refactored prototype code, thereby reducing load times by 95% and
            decreasing crashes by 60%.
          </p>
          <p>
            - Led QA efforts to isolate and address issues, streamlining process
            efficiency and issue tracking via Notion.
          </p>
          <p>
            - Boosted feature set for the business side of the app, resulting in
            a 110% increase in usage.
          </p>
          <p>
            - Implemented streamlined authentication, increasing login success
            rates.
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
            - Learned engineering fundamentals, pair programming, group
            projects, best practices, TDD, code reviews.
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
            - Collaborated with developers to create an advanced AFL-based stock
            trading algorithm.{" "}
          </p>
          <p>
            {" "}
            - Managed client relations to successfully realize visions for new
            product launches, including solo-directing a 3-camera live webinar
            that generated over $1 million in revenue.{" "}
          </p>
          <p>
            {" "}
            - Directed studio productions, routinely completing projects ahead
            of schedule.{" "}
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
            - Used meticulous editing and structured hundreds of data
            engineering videos for a premium training platform.{" "}
          </p>
          <p>
            {" "}
            - Maintained Fortune 500 customer accounts on WordPress, ensuring
            satisfaction and account retention.{" "}
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2016 - 2017"
          iconStyle={{ background: "#4e51b8", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            St. Johns River State College
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Orange Park, FL
          </h4>
          <p>
            {" "}
            - Studied computer systems and network architectures with hands-on
            experience in hardware, circuitry, and foundational software
            development.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
