// jshint esversion: 6
const knex = require('../db');

//Create
function createRecipe({ body : { title, instructions, ingredients, time, img, difficulty, favorite, tags }}) {
  return knex("recipes")
    .returning("*")
    .insert({ title, instructions, ingredients, time, img, difficulty, favorite, tags });
}
//Find All
//Find One
//Update
//Destroy

module.exports = { createRecipe };
