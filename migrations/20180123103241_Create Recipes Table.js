
exports.up = function(knex, Promise) {
  return knex.schema.createTable('Recipes', (table) => {
    table.increments();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("Recipes");
};
