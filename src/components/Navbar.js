// Import necessary React components and hooks from the React and React Router Dom libraries
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom"; // Import components

// Import the custom CSS styles for the Navbar component
import "../styles/Navbar.css"; // Import CSS

// Import the ReorderIcon from Material-UI Icons
import ReorderIcon from "@material-ui/icons/Reorder"; // Import icons

// Define the functional component 'Navbar'
function Navbar() {
  // State to manage the expansion/collapse of the mobile navbar
  const [expandNavbar, setExpandNavbar] = useState(false);

  // Get the current location using the useLocation hook from React Router Dom
  const location = useLocation();

  // useEffect to close the mobile navbar whenever the location (page) changes
  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  // Render the Navbar component
  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      {/* Button to toggle the mobile navbar's expansion/collapse */}
      <div className="toggleButton">
        <button
          onClick={() => {
            // Toggle the expandNavbar state when the button is clicked
            setExpandNavbar((prev) => !prev);
          }}
        >
          {/* ReorderIcon to visually represent the toggle action */}
          <ReorderIcon />
        </button>
      </div>

      {/* Navigation links displayed in the Navbar */}
      <div className="links">
        <Link to="/"> Home </Link>
        <Link to="/projects"> Projects </Link>
        <Link to="/learningjourney"> Learning Journey </Link>
      </div>
    </div>
  );
}

// Export the Navbar component for use in other parts of the application
export default Navbar;

