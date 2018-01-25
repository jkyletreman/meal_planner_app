// jshint esversion: 6

// Two problems
  // * How to populate array(ingredients) for jQuery
  // * How to add more than one suggestions
    // -> data serialization?

// add event listener for keydown to run autofill?

// have a global variable to add ingredients to?
  // * keep ingredient global array in local storage?

// grab all the ingredients into a array then search that?

// use jquery to help complete the form
function mapIngredients(convertJsonToArray) {
   $(".newIngredient").autofill([
      'pizza',
      'corn',
      'hotdogs'
   ]);
}

// take json response and convert to an array for JQuery
function convertJsonToArray(fetchIngredients) {
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
// YAGNI?
function ingredientId() {
  // target value? in input form
  // return value in form of a route?
  //
}
