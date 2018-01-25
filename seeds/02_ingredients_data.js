
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, title: 'chicken', measurement: "1 pound"},
        {id: 2, title: 'beef', measurement: "1 pound"},
        {id: 3, title: 'fish', measurement: "1 pound"},
        {id: 4, title: 'tofu', measurement: "1 pound"},
      ]);
    });
};
