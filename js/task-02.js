const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

const createLi = el => {
  const ingredientsEl = document.createElement("li");
  ingredientsEl.textContent = el;
  ingredientsEl.classList.add("item");
  return ingredientsEl;
}

const lis = ingredients.map((ingredient) =>
  createLi(ingredient));

ingredientsList.append(...lis);
  

// for (let i = 0; i < ingredients.length; i += 1) {
//   const ingredientsEl = document.createElement("li");
//   ingredientsEl.textContent = ingredients[i];
//   ingredientsEl.classList.add("item");
//   ingredientsList.append(ingredientsEl);
// }
// console.log(ingredientsList);



