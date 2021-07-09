import React from 'react';
import SavedRecipe from './SavedRecipe.jsx';
import { Meals, SectionHeader, RecipeDisplay } from '../styled-components.js';

const SavedRecipes = ({ savedRecipes }) => {

  return (
    <>
      <SectionHeader>Saved Recipes</SectionHeader>
      <RecipeDisplay>
        {savedRecipes.map(recipe => {
          return <SavedRecipe key={recipe.id} recipe={recipe}/>
        })}
      </RecipeDisplay>
    </>
  );

};

export default SavedRecipes;
