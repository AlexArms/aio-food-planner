import React, { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import SavedMeals from './components/SavedMeals.jsx';
import MealFinder from './components/MealFinder.jsx';
import RecipeResults from './components/RecipeResults.jsx';
import * as Styles from './styled-components.js';

const App = () => {

  const [userName, setUserName] = useState('Guest');
  const [loggedIn, setLoggedIn] = useState(false);
  const [savedMeals, setSavedMeals] = useState([]);
  const [results, setResults] = useState([]);

  const getSavedMeals = () => {
    if (window.localStorage.getItem('savedMeals')) {
      setSavedMeals(JSON.parse(window.localStorage.getItem('savedMeals')));
    } else {
      window.localStorage.setItem('savedMeals', JSON.stringify([]));
    }
  }

  useEffect(() => {
    getSavedMeals();
    console.log('meals fetched');
  }, [])

  return (
    <>
      <Header />
      <MealFinder setResults={setResults}/>
      <RecipeResults results={results}/>
      <SavedMeals savedMeals={savedMeals}/>
    </>
  );

};

export default App;