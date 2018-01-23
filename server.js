// jshint esversion: 6
const knex = require('./db'),
      express = require('express'),
      app = express();

const PORT = process.env.PORT || '8000';

app.listen(PORT, () => {
  console.log(`Running on ${PORT}`);
});
