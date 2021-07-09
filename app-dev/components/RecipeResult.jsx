import React from 'react';
import { RecipeCard, RecipeImg, RecipeTitle, Button } from '../styled-components.js';

const RecipeResult = ({ recipe, loggedIn, setSavedRecipes }) => {

  const saveRecipe = (recipe) => {
    if (!loggedIn) {
      const savedRecipes = JSON.parse(window.localStorage.getItem('savedRecipes'));
      savedRecipes.push(recipe);
      window.localStorage.setItem('savedRecipes', JSON.stringify(savedRecipes));
      setSavedRecipes(JSON.parse(window.localStorage.getItem('savedRecipes')));
    } else {

    }
  }

  return (
    <RecipeCard>
      <RecipeTitle>{recipe.title}</RecipeTitle>
      <Button onClick={saveRecipe}>Save Recipe</Button>
      <RecipeImg src={recipe.image}></RecipeImg>
    </RecipeCard>
  );

};

export default RecipeResult;
