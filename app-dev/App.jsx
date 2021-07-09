import React, { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import SavedRecipes from './components/SavedRecipes.jsx';
import RecipeFinder from './components/RecipeFinder.jsx';
import RecipeResults from './components/RecipeResults.jsx';
import * as Styles from './styled-components.js';

import TestData from '../dummy-data/getByIngredients.js';

const App = () => {

  const [userName, setUserName] = useState('Guest');
  const [loggedIn, setLoggedIn] = useState(false);
  const [savedRecipes, setSavedRecipes] = useState([]);
  const [results, setResults] = useState(TestData);

  const getSavedRecipes = () => {
    if (window.localStorage.getItem('savedRecipes')) {
      setSavedRecipes(JSON.parse(window.localStorage.getItem('savedRecipes')));
    } else {
      window.localStorage.setItem('savedRecipes', JSON.stringify([]));
    }
  }

  useEffect(() => {
    getSavedRecipes();
    console.log('recipes fetched');
  }, [])

  return (
    <>
      <Header />
      <RecipeFinder setResults={setResults}/>
      <RecipeResults loggedIn={loggedIn} results={results} setSavedRecipes={setSavedRecipes}/>
      <SavedRecipes savedRecipes={savedRecipes}/>
    </>
  );

};

export default App;
