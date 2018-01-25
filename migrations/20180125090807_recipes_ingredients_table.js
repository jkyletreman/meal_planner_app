
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes_ingredients', (table) => {
    table.increments('recipe_id').unique().references('recipes');
    table.increments('ingredients_id').unique().references('ingredients');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('recipes_ingredients');
};
