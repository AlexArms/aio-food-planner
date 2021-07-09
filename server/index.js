const express = require('express');
const axios = require('axios');
const path = require('path');
const PORT = 3000;
const { spoonacularKey } = require(path.join('..' ,'config.js'));
const postgres = require(path.join('..', 'database', 'index.js'));

const app = express();

app.use(express.json());
app.use(express.static('app-dist'));

app.post('/signup', ({ body }, res) => {
  const query = 'INSERT INTO users (username, user_password, pin) VALUES ($1, $2, $3)';
  const params = [body.username, body.password, body.pin || null];
  postgres.query(query, params)
    .then(response => res.send('Account created! Welcome aboard.'))
    .catch(error => {
      if (error.code === '23505') res.send('That username already exists - please choose another one!');
    });
});

app.post('/login', ({ body }, res) => {
  const query = 'SELECT user_password, pin, saved_recipes FROM users WHERE username = $1';
  const params = [body.username];
  postgres.query(query, params)
    .then(({ rows }) => {
      rows[0]?.pin === body.pin && rows[0]?.user_password === body.password ? res.send({ 'logged-in': true, recipes: JSON.parse(rows[0].saved_recipes) }) : res.send({ 'logged-in': false });
    })
    .catch(error => res.send('An error occured - please try again'))
});

app.get('/:username/recipes', (req, res) => {
  console.log('here')
  const query = 'SELECT saved_recipes FROM users WHERE username = $1';
  const params = [req.body.username];
  postgres.query(query, params)
    .then(response => {
      const recipes = response.rows[0]?.saved_recipes.map(string => JSON.parse(string));
      res.send(recipes);
    })
    .catch(error => res.send(error));
});

app.get('/meals', (req, res) => {
  let ingredients = JSON.parse(req.query.ingredients);
  let queryString = '';
  for (let ing in ingredients) {
    queryString += queryString.length === 0 ? ingredients[ing] : ',+' + ingredients[ing];
  }
  axios.get('https://api.spoonacular.com/recipes/findByIngredients', { params: { ingredients: queryString, apiKey: spoonacularKey}})
    .then(({ data }) => res.send(data))
    .catch(error => console.error(error))
});

app.post('/:username/recipes', ({ body }, res) => {
  const query = 'UPDATE users SET saved_recipes = array_append(saved_recipes, $2) WHERE username = $1'
  const params = [body.username, body.recipe]
  postgres.query(query, params)
    .then(response => res.send(response))
    .catch(error => res.send(error))
});

app.listen(PORT, error => {
  if (error) console.error(error.stack)
  console.log(`Connected to server - http://localhost:${PORT}`)
});
