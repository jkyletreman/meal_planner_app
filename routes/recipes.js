// jshint esversion: 6
const app = require('express').Router();

const {
  createRecipe,
  findRecipes,
  findRecipe
} = require("../models/recipes");

app.get('/', (req, res) => {
  findRecipes(req).then(recipes => {
    res.format({
      "text/html":() => res.render("recipes/index", { recipes }),
      "application/json":() => res.json(recipes)
    });
  });
});

app.get('/new', (req, res) => {
  res.render('recipes/new');
});

app.get('/:id', (req, res) => {
  findRecipe(req).then(recipes => {
      const recipe = recipes[0];

      res.format({
      "text/html": () => res.render("recipes/show", { recipe }),
      "application/json": () => res.json(recipe)
    });
  });
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
