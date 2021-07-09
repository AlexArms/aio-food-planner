import React from 'react';
import RecipeResult from './RecipeResult.jsx';
import { RecipeDisplay, SectionHeader } from '../styled-components.js';

const RecipeResults = ({ results, loggedIn, setSavedRecipes }) => {

  return (
    <>
      <SectionHeader>Search Results</SectionHeader>
      <RecipeDisplay>
        {results.map(recipe => <RecipeResult key={recipe.id} recipe={recipe} loggedIn={loggedIn} setSavedRecipes={setSavedRecipes}/>)}
      </RecipeDisplay>
    </>
  );

};

export default RecipeResults;
