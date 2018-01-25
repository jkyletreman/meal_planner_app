// jshint esversion:6
const app = require('express').Router();

const {
  createIngredient,
  findIngredients,
  findIngredient
} = require ("../models/recipes");

app.get('/', (req, res) => {

});

app.get('/new', (req, res) => {

});

app.get('/:id', (req, res) => {
  const id = req.params.id;
});

app.post('/new', (req, res) => {
  createIngredient(req).then(ingredients => {
    const ingredient = ingredients[0];

    res.sendStatus("200");
  });
});

app.patch('/:id', (req, res) => {

});

app.delete("/:id", (req, res) => {
  res.sendStatus(405);
});

module.exports = app;
