export const matchIngredients = (recipes, ingredients) => {
  const ingredientNames = [...ingredients.map(ing => ing.label.toLowerCase())];
  const adjustedRecipes = [...recipes];
  adjustedRecipes.map(recipe => {
    const adjustedRecipeIngredients = {};
    const ingredientsNeeded = [];
    let matchCount = 0;
    recipe.ingredients.forEach(item => {
      if (ingredientNames.includes(item.toLowerCase())) {
        adjustedRecipeIngredients[item.toLowerCase()] = true;
        matchCount++;
      } else {
        adjustedRecipeIngredients[item.toLowerCase()] = false;
        ingredientsNeeded.push(item.toLowerCase());
      }
    });
    recipe.matchPercent = matchCount / recipe.ingredients.length;
    recipe.adjustedRecipeIngredients = adjustedRecipeIngredients;
    recipe.ingredientsNeeded = ingredientsNeeded;
    return recipe;
  });
  return adjustedRecipes;
};

export const splitIngredients = ingredients => {
  return ingredients.split(/\r?\n/);
}