document.getElementById('ingredientDropdownBtn').addEventListener('click', function() {
    const dropdownMenu = document.getElementById('ingredientDropdownMenu');
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
  });
  
  document.addEventListener('click', function(event) {
    const dropdownMenu = document.getElementById('ingredientDropdownMenu');
    const dropdownBtn = document.getElementById('ingredientDropdownBtn');
    if (!dropdownMenu.contains(event.target) && event.target !== dropdownBtn) {
      dropdownMenu.style.display = 'none';
    }
  });
  
  document.getElementById('ingredientDropdownMenu').addEventListener('change', function() {
    const selectedOptions = Array.from(document.querySelectorAll('#ingredientDropdownMenu input[type="checkbox"]:checked')).map(input => input.parentNode.textContent.trim());
    document.getElementById('selectedIngredients').textContent = selectedOptions.join(', ');
  });
  
  document.getElementById('recipeGeneratorForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const selectedIngredients = Array.from(document.querySelectorAll('#ingredientDropdownMenu input[name="ingredient"]:checked')).map(input => input.value);
    const selectedRecipeType = document.querySelector('select[name="recipeType"]').value;
  
    fetch(`https://api.recetas.com/?ingredients=${selectedIngredients.join(',')}&type=${selectedRecipeType}`)
      .then(response => response.json())
      .then(data => {
        displayRecipes(data);
      })
      .catch(error => {
        console.error('Hubo un problema con la solicitud de recetas:', error);
      });
  });
  
  function displayRecipes(recipes) {
    const recipeResults = document.getElementById('recipeResults');
    recipeResults.innerHTML = '';
  
    if (recipes.length === 0) {
      recipeResults.innerHTML = '<p>No se encontraron recetas con estos ingredientes.</p>';
      return;
    }
  
    const ul = document.createElement('ul');
    recipes.forEach(recipe => {
      const li = document.createElement('li');
      li.textContent = recipe.name;
      ul.appendChild(li);
    });
    recipeResults.appendChild(ul);
  }
  