
exports.up = function(knex, Promise) {
  return knex.schema.createTable('Recipes', (table) => {
    table.increments();
    table.string("Title", 255).notNull();
    table.text("Instructions").notNull();
    table.text("Ingredients").notNull();
    table.string("Time").notNull();
    table.text("img");
    table.enu("Difficulty", ['easy', 'medium', 'hard', 'expert']).defaultTo('medium');
    table.boolean("Favorite").defaultTo(false);
    table.enu("Tags", ['chicken', 'beef', 'vegetarian', 'fish']).defaultTo('');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("Recipes");
};
