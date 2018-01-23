// jshint esversion: 6
// require("dotenv").config();
const knex = require('./db'),
      express = require('express'),
      morgan =require('morgan');
      bodyParser = require('body-parser');
      app = express();

const PORT = process.env.PORT || '8000';

app.set('view engine', 'ejs');
app.use(express.static('public'));

// Setup Middleware
app.use(morgan('combined'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Routes
app.get('/recipes', (req, res) => {
  res.send('Working');
});

app.get('/recipes/new', (req, res) => {
  res.render('recipes/new');
});

app.get('/recipes/:id', (req, res) => {
  res.send('Working');
});

app.post('/recipes/new', (req, res) => {

});

app.patch('/recipes/:id', (req, res) => {
  res.send('Working');
});

app.delete('/recipes/:id', (req, res) => {
  res.send('Working');
});

app.listen(PORT, () => {
  console.log(`Running on ${PORT}`);
});
