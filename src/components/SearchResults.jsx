import React from "react";
import "./SearchResults.css"; 

function SearchResults({ recipes, onShowDetails }) {
  if (!recipes || recipes.length === 0)
    return <p className="no-recipes">No recipes found.</p>;

  return (
    <div className="results-grid">
      {recipes.map((recipe) => (
        <div key={recipe.idMeal} className="recipe-card">
          <img
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
            className="recipe-image"
          />
          <h4 className="recipe-title">{recipe.strMeal}</h4>
          {/* <button
            onClick={() => onShowDetails(recipe.idMeal)}
            className="details-button"
          >
            Details
          </button> */}
        </div>
      ))}
    </div>
  );
}

export default SearchResults;
