const express = require('express');
const axios = require('axios');
const path = require('path');
const PORT = 3000;
const { spoonacularKey } = require(path.join('..' ,'config.js'));
const postgres = require(path.join('..', 'database', 'index.js'));

const app = express();

app.use(express.json());
app.use(express.static('app-dist'));

app.get('/meals', (req, res) => {
  let ingredients = JSON.parse(req.query.ingredients);
  let ingString = '';
  for (let ing in ingredients) {
    ingString += ingString.length === 0 ? ingredients[ing] : ',+' + ingredients[ing];
  }
  console.log(ingString);
  axios.get('https://api.spoonacular.com/recipes/findByIngredients', { params: { ingredients: ingString, apiKey: spoonacularKey}})
    .then(({ data }) => res.send(data))
    .catch(error => console.error(error))
});

app.listen(PORT, error => {
  if (error) console.error(error.stack)
  console.log(`Connected to server - http://localhost:${PORT}`)
});
