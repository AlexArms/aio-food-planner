import React from 'react';
import SavedMeal from './SavedMeal.jsx';
import { Meals, MealsHeader } from '../styled-components.js';

const SavedMeals = ({ savedMeals }) => {

  return (
    <>
      <MealsHeader>Saved Meals</MealsHeader>
      <Meals>

      </Meals>
    </>
  );

};

export default SavedMeals;