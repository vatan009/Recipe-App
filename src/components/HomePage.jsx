import React from "react";
import { useNavigate } from "react-router-dom"; // Hook to programmatically navigate between routes
import "./HomePage.css"; // Importing the CSS file for styling

function HomePage() {
  const navigate = useNavigate(); // Initialize navigate function from react-router-dom

  return (
    // Main container for the homepage
    <div className="homepage-container">
      
      {/* Card container for the welcome message and button */}
      <div className="homepage-card">
        
        {/* Title of the homepage */}
        <h1 className="homepage-title">Welcome to Meal Finder</h1>
        
        {/* Short description or introduction */}
        <p className="homepage-text">
          Explore delicious meals by ingredient, category, or cuisine. Find your next favorite recipe in just a few clicks!
        </p>
        
        {/* Button to navigate to the search page */}
        <button 
          className="homepage-button" 
          onClick={() => navigate("/search")} // Navigate to /search route on click
        >
          Explore Meals
        </button>
      </div>
    </div>
  );
}

export default HomePage; // Export the component to be used in other parts of the app
