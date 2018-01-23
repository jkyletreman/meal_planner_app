// jshint esversion: 6
// require("dotenv").config();
const knex = require('./db'),
      express = require('express'),
      app = express();

const PORT = process.env.PORT || '8000';


// Routes
app.get('/recipes', (req, res) => {
  res.send('Working');
});

app.get('recipes/:id', (req, res) => {
  res.send('Working');
});

app.post('recipes/new', (req, res) => {
  res.send('Working');
});

app.patch('recipes/:id', (req, res) => {
  res.send('Working');
});

app.delete('recipes/:id', (req, res) => {
  res.send('Working');
});

app.listen(PORT, () => {
  console.log(`Running on ${PORT}`);
});
