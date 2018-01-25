
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes_ingredients', (table) => {
    table.increments();
    table.increments('recipe_id').references('recipes');
    table.increments('ingredients_id').references('ingredients');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('recipes_ingredients');
};
