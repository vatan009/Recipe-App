import React, { useState } from "react";
import { searchMeals, getMealById } from "../api/meals";
import SearchResults from "./SearchResults";
import "./SearchPage.css"; 

function SearchPage() {
  const [type, setType] = useState("ingredient");
  const [value, setValue] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleSearch = async () => {
    if (!value.trim()) return;
    setLoading(true);
    try {
      const meals = await searchMeals({ type, value });
      setRecipes(meals);
      setSelectedRecipe(null);
    } catch (error) {
      console.error(error);
      setRecipes([]);
    } finally {
      setLoading(false);
    }
  };

  const handleShowDetails = async (id) => {
    const meal = await getMealById(id);
    setSelectedRecipe(meal);
  };

  return (
    <div className="searchpage-container">
      <h2 className="searchpage-title">Recipe Finder</h2>
      
      <div className="search-controls">
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="ingredient">Ingredient</option>
          <option value="category">Category</option>
          <option value="area">Area</option>
        </select>
        <input
          type="text"
          placeholder={`Enter ${type}`}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {loading ? (
        <p className="loading-text">Loading...</p>
      ) : (
        <SearchResults recipes={recipes} onShowDetails={handleShowDetails} />
      )}

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

export default SearchPage;
