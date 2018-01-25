// jshint esversion: 6
// add event listener for keydown to run autofill?

// use jquery to help complete the form
function mapIngredients(convertData) {
   $("#ingredients").autofill( convertData );
}

// take json response and convert to an array for JQuery
function convertData(fetchIngredients) {
  var arr = Object.keys(obj).map(function(k) { return obj[k]; });
}

// Get the ingredients from the DB
function fetchIngredients(ingredientId) {
  return fetch(`/ingredients/${ingredientId}`, {
    method: 'GET',
    headers: { 'Accept': 'application/json' },
  }).then(res => res.json());
}
// get ingredient id (string) from route.
// Will this handle more then one in a form
function ingredientId() {
  const INGRE_ID = /^\/ingredients\/(\d+)/;
  const match = INGRE_ID.exec(window.location.pathname);

  if (!match) {return null;}

  return match[1];
}
