// jshint esversion: 6
const app = require('express').Router();

const {
  createRecipe,
} = require("../models/recipes");

app.get('/', (req, res) => {
  res.render('recipes/index');
});

app.get('/new', (req, res) => {
  res.render('recipes/new');
});

app.get('/:id', (req, res) => {
  res.render('recipes/show');
});

app.post('/new', (req, res) => {
  createRecipe(req).then(recipes => {
    const recipe = recipes[0];

    res.format({
      "text/html": () => res.redirect(`/recipes/${recipe.id}`),
      "application/json": () => res.json(recipe)
    });
  });
});

app.patch('/:id', (req, res) => {
  res.send('Working');
});

app.delete('/:id', (req, res) => {
  res.send('Working');
});

module.exports = app;
