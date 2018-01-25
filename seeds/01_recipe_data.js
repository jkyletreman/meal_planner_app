
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, title: "Chicken Marsala", instructions: "Cook chicken, Make sauce, combine", ingredients: "chicken, sauce", time: "2 hours", img: "", difficulty: "easy", favorite: "true", tags: "chicken"}
      ]);
    });
};
