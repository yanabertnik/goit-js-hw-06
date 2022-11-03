const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");
for (let i = 0; i < ingredients.length; i += 1) {
  const ingredientsEl = document.createElement("li");
  ingredientsEl.textContent = ingredients[i];
  ingredientsEl.classList.add("item");
  ingredientsList.append(ingredientsEl);
}
console.log(ingredientsList);



