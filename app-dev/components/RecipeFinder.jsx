import React, { useState, useEffect } from 'react'
import { MealSearch, IngredientInput, SearchInfo, Button } from '../styled-components.js';
import axios from 'axios';

const RecipeFinder = ({ setResults }) => {

  const [ingredients, setIngredients] = useState({});

  const updateIngredients = (event) => {
    setIngredients(prev => {
      let newState = {...prev};
      newState[event.target.name] = event.target.value;
      return newState;
    });
  };

  const getMeals = () => {
    console.log('getting meals...');
    axios.get('/meals', { params: { ingredients: ingredients}, headers: { "Content-Type": 'application/json'}})
      .then(({ data })=> setResults(data))
      .catch(error => console.error(error));
  };

  const clearInputs = () => {
    let inputList = document.getElementsByClassName('ing-input');
    for (let i = 0; i < inputList.length; i++) {
      inputList[i].value = '';
    }
  };

  return (
    <MealSearch className="meal-search">
      <SearchInfo>Enter up to 10 different ingredients to search for a recipe with!</SearchInfo>
      <IngredientInput type="text" name="i1" className="ing-input" onChange={updateIngredients}></IngredientInput>
      <IngredientInput type="text" name="i2" className="ing-input" onChange={updateIngredients}></IngredientInput>
      <IngredientInput type="text" name="i3" className="ing-input" onChange={updateIngredients}></IngredientInput>
      <IngredientInput type="text" name="i4" className="ing-input" onChange={updateIngredients}></IngredientInput>
      <IngredientInput type="text" name="i5" className="ing-input" onChange={updateIngredients}></IngredientInput>
      <IngredientInput type="text" name="i6" className="ing-input" onChange={updateIngredients}></IngredientInput>
      <IngredientInput type="text" name="i7" className="ing-input" onChange={updateIngredients}></IngredientInput>
      <IngredientInput type="text" name="i8" className="ing-input" onChange={updateIngredients}></IngredientInput>
      <IngredientInput type="text" name="i9" className="ing-input" onChange={updateIngredients}></IngredientInput>
      <IngredientInput type="text" name="i10" className="ing-input" onChange={updateIngredients}></IngredientInput>
      <Button onClick={getMeals}>Find Recipes</Button>
      <Button onClick={clearInputs}>Clear Fields</Button>
    </MealSearch>
  );

};

export default RecipeFinder;
