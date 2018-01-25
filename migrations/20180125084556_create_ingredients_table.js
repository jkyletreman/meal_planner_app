
exports.up = function(knex, Promise) {
  return knex.schema.createTable('ingredients', (table) => {
    table.increments('id');
    table.string('name', 255).notNull();
    table.string('measurement', 30).notNull();
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('ingredients');
};
