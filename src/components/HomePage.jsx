import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="homepage-container">
      <div className="homepage-card">
        <h1 className="homepage-title">Welcome to Meal Finder</h1>
        <p className="homepage-text">
          Explore delicious meals by ingredient, category, or cuisine. Find your next favorite recipe in just a few clicks!
        </p>
        <button className="homepage-button" onClick={() => navigate("/search")}>
          Explore Meals
        </button>
      </div>
    </div>
  );
}

export default HomePage;
