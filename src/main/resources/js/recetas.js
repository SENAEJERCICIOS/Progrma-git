async function loadData(){

// Creamos una clase Recipe que contendrá los atributos de una receta
class Recipe {
  constructor(name, ingredients, preparation, time, difficulty) {
    this.name = name;
    this.ingredients = ingredients;
    this.preparation = preparation;
    this.time = time;
    this.difficulty = difficulty;
  }
}

// Creamos una lista de recetas que contendrá todas las recetas
let recipeList = [];

// Función para agregar una receta a la lista y actualizar la vista
function addRecipe() {
  let name = document.getElementById("name").value;
  let ingredients = document.getElementById("ingredients").value;
  let preparation = document.getElementById("preparation").value;
  let time = document.getElementById("time").value;
  let difficulty = document.getElementById("difficulty").value;

  let recipe = new Recipe(name, ingredients, preparation, time, difficulty);
  recipeList.push(recipe);

  // Actualizamos la vista de la lista de recetas
  let recipes = document.getElementById("recipes");
  let li = document.createElement("li");
  li.innerHTML = `<h3>${name}</h3><p><strong>Ingredientes:</strong> ${ingredients}</p><p><strong>Preparación:</strong> ${preparation}</p><p><strong>Tiempo:</strong> ${time}</p><p><strong>Dificultad:</strong> ${difficulty}</p><button class="delete-button" data-index="${recipeList.length - 1}">Eliminar</button>`;
  recipes.appendChild(li);

  // Agregamos un event listener para el botón de eliminar
  let deleteButtons = document.querySelectorAll(".delete-button");
  deleteButtons.forEach(function (button) {
    button.addEventListener("click", deleteRecipe);
  });

  // Limpiamos el formulario
  document.getElementById("name").value = "";
  document.getElementById("ingredients").value = "";
  document.getElementById("preparation").value = "";
  document.getElementById("time").value = "";
  document.getElementById("difficulty").value = "";
}

// Función para eliminar una receta de la lista y actualizar la vista
function deleteRecipe() {
  let index = this.dataset.index;
  recipeList.splice(index, 1);

  // Actualizamos la vista de la lista de recetas
  let recipes = document.getElementById("recipes");
  recipes.innerHTML = "";
  recipeList.forEach(function (recipe, index) {
    let li = document.createElement("li");
    li.innerHTML = `<h3>${recipe.name}</h3><p><strong>Ingredientes:</strong> ${recipe.ingredients}</p><p><strong>Preparación:</strong> ${recipe.preparation}</p><p><strong>Tiempo:</strong> ${recipe.time}</p><p><strong>Dificultad:</strong> ${recipe.difficulty}</p><button class="delete-button" data-index="${index}">Eliminar</button>`;
    recipes.appendChild(li);
  });

  // Agregamos un event listener para el botón de eliminar
  let deleteButtons = document.querySelectorAll(".delete-button");
  deleteButtons.forEach(function (button) {
    button.addEventListener("click", deleteRecipe);
  });
}

// Agregamos un event listener para el botón de agregar receta
let addButton = document.getElementById("add-button");
addButton.addEventListener("click", addRecipe);

}

loadData();