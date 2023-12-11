import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  const linkedinProfileUrl = "https://www.linkedin.com/in/jorell-raka-b935a7199/";

  return (
    <div className="footer">
      <div className="socialMedia">
        <a href={linkedinProfileUrl} target="_blank" rel="noopener noreferrer">
          <LinkedInIcon />
        </a>
      </div>
      <p> &copy; 2023 Jorell Tanusaputra.com</p>
    </div>
  );
}

export default Footer;

