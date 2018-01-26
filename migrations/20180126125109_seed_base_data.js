exports.up = function(knex, Promise) {
  return knex('recipes').delete().then(() => {
    return knex('recipes').insert([
{
        "title": "Burger and Fries",
        "instructions": "Cook meat, cut potatoes, fry fries, serve hot on a bun",
        "ingredients": "beef, potatoes, bun",
        "time": "1 hour",
        "img": "https://static.pexels.com/photos/70497/pexels-photo-70497.jpeg",
        "difficulty": "easy",
        "favorite": 'yes',
        "tags": "beef",
      },
      {
        "title": "Milk Shake",
        "instructions": "Take ingredients and blend well",
        "ingredients": "milk, icecream, oreos",
        "time": "10 minutes",
        "img": "http://del.h-cdn.co/assets/15/49/640x960/gallery-1448988386-delish-milkshakes-eggnog-chocolate.jpg",
        "difficulty": "easy",
        "favorite": "yes",
        "tags": "vegetarian",
      },
      {
        "title": "Speghetti and Meatballs",
        "instructions": "Cook pasta, make sauce and meatballs, combine",
        "ingredients": "pasta, sauce, meat, seasonings",
        "time": "2 hours",
        "img": "https://cook.fnr.sndimg.com/content/dam/images/cook/fullset/2015/5/15/0/CCTIA105_spaghetti-and-turkey-meatballs-recipe_s4x3.jpg.rend.hgtvcom.616.462.suffix/1431697043066.jpeg",
        "difficulty": "medium",
        "favorite": "yes",
        "tags": "beef",
      },
      {
        "title": "Green Curry",
        "instructions": "Combine ingredients and cook",
        "ingredients": "Curry ingredients",
        "time": "1 hour",
        "img": "https://rasamalaysia.com/wp-content/uploads/2008/12/green_curry4.jpg",
        "difficulty": "medium",
        "favorite": "yes",
        "tags": "vegetarian",
      }
    ]);
  });
};

exports.down = function(knex, Promise) {
  return knex('recipes').delete();
};
