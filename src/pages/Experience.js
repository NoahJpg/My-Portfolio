import React from 'react'
import  {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School"
import WorkIcon from "@material-ui/icons/Work"
import "../styles/Experience.css"

function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#c0bbf3'>
        
        <VerticalTimelineElement 
          className="vertical-timeline-element--education"
          date='Jan 2023 - Present'
          iconStyle={{background: "#4e51b8", color: "#fff"}}
          icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            Software Development Bootcamp, Epicodus
          </h3>
          <h4 className='vertical-timeline-element-subtitle'> 
            Remote / Seattle, WA
          </h4>
          <p> Web Development Certificate  </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
          className="vertical-timeline-element--education" 
          date='2020 - 2023'
          iconStyle={{background: "#2144a7", color: "#fff"}}
          icon={<WorkIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            Small Business Owner, Foggy Eyes Productions
          </h3>
          <h4 className='vertical-timeline-element-subtitle'> 
            Seattle, WA 
          </h4>
          <p> Designed Websites and Merchandise For Niche Brands </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
          className="vertical-timeline-element--education" 
          date='2019 - 2022'
          iconStyle={{background: "#2144a7", color: "#fff"}}
          icon={<WorkIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            Director of Video, WealthPress
          </h3>
          <h4 className='vertical-timeline-element-subtitle'> 
            Nocatee, FL 
          </h4>
          <p> Directed Video Studio, Live Broadcasts, Product Launches </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
          className="vertical-timeline-element--education" 
          date='2016 - 2019'
          iconStyle={{background: "#2144a7", color: "#fff"}}
          icon={<WorkIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            Video Editor, Pragmatic Works
          </h3>
          <h4 className='vertical-timeline-element-subtitle'> 
            Fleming Island, FL
          </h4>
          <p> Edit Training Videos for WordPress Learning Platform </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
          className="vertical-timeline-element--education" 
          iconStyle={{background: "#4e51b8", color: "#fff"}}
          icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            St. Johns River State College
          </h3>
          <h4 className='vertical-timeline-element-subtitle'> 
            Orange Park, FL
          </h4>
          <p> Information Technology </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience