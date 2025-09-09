export async function searchMeals({ type, value }) {
  let url = "";
  switch (type) {
    case "ingredient":
      url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(value)}`;
      break;
    case "category":
      url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${encodeURIComponent(value)}`;
      break;
    case "area":
      url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${encodeURIComponent(value)}`;
      break;
    default:
      return [];
  }

  const res = await fetch(url);
  const data = await res.json();
  return data.meals || [];
}

export async function getMealById(id) {
  const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  const data = await res.json();
  return data.meals ? data.meals[0] : null;
}
