import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import "../styles/Learningjourney.css";

function Learningjourney() {
  return (
    <div className="learningjourney">
      <VerticalTimeline lineColor="#2e74d7">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Decemnber 2019"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Georges River College Oatley Campus
          </h3>
          <p> Graduated and recieved my High School Certificate</p>
        </VerticalTimelineElement>

        
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date= "March 2020"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          University of Technology Sydney
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
          Bachelor of Forensic Science and Diploma in Innovation
          </h4>
        
          <p> Started University</p>
        </VerticalTimelineElement>


        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Nov 2021- November 2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Soccer Coach - Little Kickers
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Sydney, NSW
          </h4>
          <p>Lead classes with around 15-20 students each in educational based soccer games, age group ranging from 8 months to 6 years old</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="January - March 2023"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Full stack web developer intern - Infosys
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
          Sydney, NSW
          </h4>
          <p>
            Developed a Green House Gas emmission Calculator website, which allows users to track their GHG emmissions based on their daily activities.
          </p>
        </VerticalTimelineElement>



        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date= "July 2023"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
          
        >
          <h3 className="vertical-timeline-element-title">
          COMPTIA
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
          COMPTIA SECURITY +
          </h4>
        
          <p> Honning my foundational understanding in Cybersecurity and obtained COMPTIA SEC+</p>
        </VerticalTimelineElement>


        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="July 2023 - Present "
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Accessibily Student Consultant - University of Technology Sydney
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
          Sydney, NSW
          </h4>
          <p>
          Consult academics; giving them insights, feedbacks and recommended interventions to tackle university's gap inclusive learning for people with disability
          </p>
        </VerticalTimelineElement>


        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date= "March 2020"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          University of Technology Sydney
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
          Bachelor of Forensic Science and Diploma in Innovation
          </h4>
        
          <p> Graduated from University! wohooo</p>
        </VerticalTimelineElement>


      </VerticalTimeline>

    


    </div>
  );
}

export default Learningjourney;
