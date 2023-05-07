import React from 'react'
import  {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School"
import WorkIcon from "@material-ui/icons/Work"
import "../styles/Experience.css"

function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement 
          className="vertical-timeline-element--education" 
          date='Jan 2023 - Present'
          iconStyle={{background: "#e9d35b", color: "#fff"}}
          icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            Software Development Bootcamp, Epicodus
          </h3>
          <h4 className='vertical-timeline-element-subtitle'> 
            Remote/Seattle, WA
          </h4>
          <p> Web Development Certificate  </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
          className="vertical-timeline-element--education" 
          date='2020 - 2023'
          iconStyle={{background: "#3e497a", color: "#fff"}}
          icon={<WorkIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            Small Business Owner, Foggy Eyes Productions
          </h3>
          <h4 className='vertical-timeline-element-subtitle'> 
            Seattle, WA 
          </h4>
          <p> Designed websites and merchandise for brands </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
          className="vertical-timeline-element--education" 
          date='2019 - 2022'
          iconStyle={{background: "#3e497a", color: "#fff"}}
          icon={<WorkIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            Director of Video, WealthPress
          </h3>
          <h4 className='vertical-timeline-element-subtitle'> 
            Nocatee, FL 
          </h4>
          <p> Directed and ran video studio, live broadcasts, product launches </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
          className="vertical-timeline-element--education" 
          date='2016 - 2019'
          iconStyle={{background: "#3e497a", color: "#fff"}}
          icon={<WorkIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            Video Editor, Pragmatic Works
          </h3>
          <h4 className='vertical-timeline-element-subtitle'> 
            Fleming Island, FL
          </h4>
          <p> Edited Training videos - WordPress learning platform </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
          className="vertical-timeline-element--education" 
          date='2012 - 2016'
          iconStyle={{background: "#e9d35b", color: "#fff"}}
          icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            Middleburg High School 
          </h3>
          <h4 className='vertical-timeline-element-subtitle'> 
            Middleburg, Florida
          </h4>
          <p> High School Diploma </p>
        </VerticalTimelineElement>

      </VerticalTimeline>
    </div>
  )
}

export default Experience