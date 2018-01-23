// jshint esversion: 6
const app = require('express').Router();

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

});

app.patch('/:id', (req, res) => {
  res.send('Working');
});

app.delete('/:id', (req, res) => {
  res.send('Working');
});

module.exports = app;
