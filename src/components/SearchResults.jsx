import React from "react";
import "./SearchResults.css"; // Import CSS for styling search results

// Functional component to display a list of recipes
// Props:
// - recipes: array of recipe objects to display

function SearchResults({ recipes, onShowDetails }) {
  // If no recipes are available, show a message
  if (!recipes || recipes.length === 0)
    return <p className="no-recipes">No recipes found.</p>;

  return (
    // Container for the grid of recipe cards
    <div className="results-grid">
      {recipes.map((recipe) => (
        <div key={recipe.idMeal} className="recipe-card">
          {/* Recipe thumbnail image */}
          <img
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
            className="recipe-image"
          />

          {/* Recipe name/title */}
          <h4 className="recipe-title">{recipe.strMeal}</h4>

          {/* Button to show recipe details (currently commented out) */}
          {/* 
          <button
            onClick={() => onShowDetails(recipe.idMeal)} // Calls function from parent to show details
            className="details-button"
          >
            Details
          </button> 
          */}
        </div>
      ))}
    </div>
  );
}

export default SearchResults; // Export the component
