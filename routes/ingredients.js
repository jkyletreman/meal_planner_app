// jshint esversion:6
const app = require('knex').Router();

// const {
//   createIngredient,
//   findIngredients,
//   findIngredient
// } = require ("../models/recipes");

app.get('/', (req, res) => {

});

app.get('/new', (req, res) => {

});

app.get('/:id', (req, res) => {
  const id = req.params.id;
});

app.post('/new', (req, res) => {

});

app.patch('/:id', (req, res) => {

});

app.delete("/:id", (req, res) => {
  res.sendStatus(405);
});

modules.exports = app;
