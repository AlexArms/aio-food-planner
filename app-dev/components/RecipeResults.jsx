import React from 'react';
import RecipeResult from './RecipeResult.jsx';
import { ResultsDisplay } from '../styled-components.js';

const RecipeResults = ({ results }) => {

  return (
    <>
      <h3>Search Results</h3>
      <ResultsDisplay>
        {results.map(recipe => <RecipeResult key={recipe.id} recipe={recipe}/>)}
      </ResultsDisplay>
    </>
  );

};

export default RecipeResults;
