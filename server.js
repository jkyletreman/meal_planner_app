// jshint esversion: 6
// require("dotenv").config();
const knex = require('./db'),
      express = require('express'),
      morgan =require('morgan');
      bodyParser = require('body-parser');

const app = express();

const PORT = process.env.PORT || '8000';

const recipes = require('./routes/recipes');

app.set('view engine', 'ejs');
app.use(express.static('public'));

// Setup Middleware
app.use(morgan('combined'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Routes
app.use('/recipes', recipes);

app.listen(PORT, () => {
  console.log(`Running on ${PORT}`);
});
