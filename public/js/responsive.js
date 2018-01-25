// unlinked
$(() => {
  addIngredient.addEventListener('click', (e) => {
    const ingredients = e.target.parentElement;
    const ingredientInput = document.getElementById('ingredients_template').cloneNode();
    const index = ingredients.querySelectorAll('.newIngredient').length;

    ingredientInput.classList.add('newIngredient');
    ingredientInput.setAttribute('name', `ingredient[${index}]`);
    ingredientInput.setAttribute('type', 'text');
    ingredientInput.setAttribute('list', "suggestions")

    ingredients.prepend(ingredientInput);
  })
});
