import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import InstagramIcon from "@material-ui/icons/Instagram"
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  const linkedinProfileUrl = "https://www.linkedin.com/in/jorell-raka-b935a7199/";
  const emailAddress = "mailto:jorellraka@gmail.com";
  const instagramProfileUrl = "https://www.instagram.com/jorellraka/";
  const resumePdfUrl = ".../Jorellresume.pdf"; 

  return (
    <div className="home">
      <div className="about">
        <h2> Hello! My Name is Jorell Tanusaputra</h2>
        <div className="prompt">
        <p>
            I am an aspiring IT professional with a degree in Forensic Science (Digital Forensic), a Diploma in Innovation, and
            certification in COMPTIA Security +. I have experience as a full stack developer intern at Infosys, which deepened my appreciation
            for IT.
          </p>
          <div className="socialMedia">
            <a href={linkedinProfileUrl} target="_blank" rel="noopener noreferrer">
              <LinkedInIcon />
            </a>
            <a href={emailAddress} target="_blank" rel="noopener noreferrer">
              <EmailIcon />
            </a>
            <a href={instagramProfileUrl} target="_blank" rel="noopener noreferrer">
              <InstagramIcon />
            </a>
          </div>
          <p>
            Click{" "}
            <a href={resumePdfUrl} download>
              here
            </a>{" "}
            to download my resume
          </p>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Angular, Redux, HTML, CSS, React Native, Flutter, NPM,
              Ionic, BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, Java Spring, .NET, ExpressJS, GraphQL, ApolloServer,
              MySQL, MongoDB, DynamoDB, DigitalOcean, AWS S3, MS SQL
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python, C#, C, C++, TypeScript, Go</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
