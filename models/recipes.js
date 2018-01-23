// jshint esversion: 6
const knex = require('../db');

//Create
function createRecipe({ body : { title, instructions, ingredients, time, img, difficulty, favorite, tags }}) {
  return knex("recipes")
    .returning("*")
    .insert({ title, instructions, ingredients, time, img, difficulty, favorite, tags });
}
//Find All
function findRecipes() {
  return knex("recipes");
}
//Find One
function findRecipe({ params: { id }}) {
  return knex("recipes").where("id", id);
}
//Update
//Destroy

module.exports = {
  createRecipe,
  findRecipes,
  findRecipe
 };
