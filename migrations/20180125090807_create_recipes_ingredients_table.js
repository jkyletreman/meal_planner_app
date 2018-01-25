
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes_ingredients', (table) => {
    table.increments("id");
    table.foreign('recipe_id').references('recipes.id');
    table.foreign('ingredients_id').references('ingredients.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('recipes_ingredients');
};
