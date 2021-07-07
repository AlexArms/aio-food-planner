import React from 'react';
import { Meal, MealImg, MealName } from '../styled-components.js';

const SavedMeal = ({ meal }) => {

  return (
    <Meal>
      <MealName>Name Here</MealName>
      <MealImg src="" alt="img here"></MealImg>
    </Meal>
  );

}

export default SavedMeal
