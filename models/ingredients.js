// jshint esversion: 6

//Create
function createIngredient({ body : { title, measurement }}) {
  return knex("ingredients")
    .returning("*")
    .inset({ title, measurement });
}

function findIngredients() {
  return knex("ingredients");
}

function findIngredient({ params: { id }}) {
  return knex("ingredients").where('id', id);
};
//Update
//Destroy

module.exports = {
  createIngredient,
  findIngredients,
  findRecipe
};
