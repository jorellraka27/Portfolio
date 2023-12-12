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

      
      <div className="Factsaboutme">
        <h1> Facts about me </h1>
        <ol className="list">
          <li className="item">
          <h2> Education/Certification</h2>
  <ul>
    <li>
      <span>Bachelor of Forensic Science, University of Technology Sydney, 2020-2023</span>
    </li>
    <li>
      <span>Diploma in Innovation, University of Technology Sydney, 2020-2023</span>
    </li>
    <li>
      <span>COMPTIA SECURITY + Certification Validity: 2023-2025</span>
    </li>
  </ul>
          </li>
          <li className="item">
            <h2>Skills</h2>
            <li>
      <span>Programming: Python, MATLAB, Java, Javascript, R, and C#</span>
    </li>
    <li>
      <span>Cybersecurity: Kalilinux, nmap, ncat, sqlmap, powershell, John the ripper, aircrack-ng, Autopsy</span>
    </li>
    <li>
      <span>Networking: Wireshark, Cisco Packet Tracer</span>
    </li>
    <li>
      <span>OS: Microsoft, Ubuntu, MacOS</span>
    </li>
    <li>
      <span>CLI: Cmd, Bash, Powershell</span>
    </li>
          </li>
          <li className="item">
            <h2>Hobbies</h2>
            <span>Food, Gym, Soccer and Playing guitar</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
