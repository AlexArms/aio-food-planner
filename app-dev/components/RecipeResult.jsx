import React from 'react';
import { Result, RecipeImg, RecipeTitle } from '../styled-components.js';

const RecipeResult = ({ recipe }) => {

  return (
    <Result>
      <RecipeTitle>{recipe.title}</RecipeTitle>
      <RecipeImg src={recipe.image}></RecipeImg>
    </Result>
  );

};

export default RecipeResult;
