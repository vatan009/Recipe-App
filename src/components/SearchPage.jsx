import React, { useState } from "react";
import { searchMeals, getMealById } from "../api/meals"; // Import API functions
import SearchResults from "./SearchResults"; // Component to display list of meals
import "./SearchPage.css"; // Import CSS for styling

function SearchPage() {
  // State to track the type of search: ingredient, category, or area
  const [type, setType] = useState("ingredient");
  
  // State to track the search input value
  const [value, setValue] = useState("");
  
  // State to store the list of search results
  const [recipes, setRecipes] = useState([]);
  
  // State to show loading indicator while fetching data
  const [loading, setLoading] = useState(false);
  
  // State to store details of a selected recipe
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  // Function to handle searching meals based on type and input value
  const handleSearch = async () => {
    if (!value.trim()) return; // Do nothing if input is empty
    setLoading(true); // Show loading indicator
    try {
      const meals = await searchMeals({ type, value }); // Call API to search meals
      setRecipes(meals); // Update recipes state with results
      setSelectedRecipe(null); // Clear previously selected recipe
    } catch (error) {
      console.error(error); // Log errors to console
      setRecipes([]); // Reset recipes on error
    } finally {
      setLoading(false); // Hide loading indicator
    }
  };

  // Function to fetch and display details of a selected recipe
  const handleShowDetails = async (id) => {
    const meal = await getMealById(id); // Fetch meal details by ID
    setSelectedRecipe(meal); // Update selectedRecipe state
  };

  return (
    <div className="searchpage-container">
      {/* Page title */}
      <h2 className="searchpage-title">Recipe Finder</h2>
      
      {/* Search controls: dropdown, input, and button */}
      <div className="search-controls">
        {/* Dropdown to select search type */}
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="ingredient">Ingredient</option>
          <option value="category">Category</option>
          <option value="area">Area</option>
        </select>

        {/* Input field for search query */}
        <input
          type="text"
          placeholder={`Enter ${type}`} // Placeholder changes based on search type
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        {/* Search button */}
        <button onClick={handleSearch}>Search</button>
      </div>

      {/* Display loading text while fetching results */}
      {loading ? (
        <p className="loading-text">Loading...</p>
      ) : (
        // Display search results component
        <SearchResults recipes={recipes} onShowDetails={handleShowDetails} />
      )}

      {/* Display selected recipe details */}
      {selectedRecipe && (
        <div className="recipe-details">
          <h3>{selectedRecipe.strMeal}</h3>
          <img src={selectedRecipe.strMealThumb} alt={selectedRecipe.strMeal} />
          <p><strong>Category:</strong> {selectedRecipe.strCategory}</p>
          <p><strong>Area:</strong> {selectedRecipe.strArea}</p>
          <p><strong>Instructions:</strong> {selectedRecipe.strInstructions}</p>
        </div>
      )}
    </div>
  );
}

export default SearchPage; // Export component
