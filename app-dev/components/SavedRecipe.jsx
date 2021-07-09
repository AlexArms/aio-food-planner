import React from 'react';
import { RecipeTitle, RecipeImg, RecipeCard } from '../styled-components.js';

const SavedRecipe = ({ recipe }) => {

  return (
    <RecipeCard>
      <RecipeTitle>{recipe.title}</RecipeTitle>
      <RecipeImg src={recipe.image}></RecipeImg>
    </RecipeCard>
  );

}

export default SavedRecipe;
