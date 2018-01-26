
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes', (table) => {
    table.increments('id'); // add Serial #
    table.string("title", 255).notNull();
    table.string("instructions").defaultTo("no instructions available"); // why is not null failing here?
    table.string("ingredients").defaultTo("no ingredients available");
    table.string("time").defaultTo("no time information available");
    table.text("img").notNull().defaultTo('./public/assets/default-img.jpg');
    table.enu("difficulty", ['easy', 'medium', 'hard', 'expert']).defaultTo('medium');
    table.boolean("favorite").defaultTo(false);
    table.enu("tags", ['chicken', 'beef', 'vegetarian', 'fish']);
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("recipes");
};
