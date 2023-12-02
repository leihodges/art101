// lab.js

function generateRecipes() {
    // Get user preferences
    const vegan = document.getElementById('vegan').checked;
    const vegetarian = document.getElementById('vegetarian').checked;
    const halal = document.getElementById('halal').checked;
    const cookingTime = document.getElementById('cookingTime').value;

    // Replace 'YOUR_API_KEY' with your actual Spoonacular API key
    const apiKey = 'de9c6f3e61cc477d97e79d9dc9614ed8';
    const apiUrl = `https://api.spoonacular.com/recipes/search?apiKey=${apiKey}&`;

    let dietRestrictions = '';
    if (vegan) dietRestrictions += 'vegan,';
    if (vegetarian) dietRestrictions += 'vegetarian,';
    if (halal) dietRestrictions += 'halal,';

    // Remove trailing comma
    dietRestrictions = dietRestrictions.replace(/,\s*$/, '');

    const fullUrl = `${apiUrl}&diet=${dietRestrictions}&maxReadyTime=${cookingTime}`;

    // Make API request using fetch
    fetch(fullUrl)
        .then(response => response.json())
        .then(data => displayRecipes(data))
        .catch(error => {
            console.error('Error fetching recipes:', error);
            const recipeResultsDiv = document.getElementById('recipeResults');
            recipeResultsDiv.innerHTML = '<p>Oops! Something went wrong. Please try again later.</p>';
        });
}

function displayRecipes(data) {
    const recipeResultsDiv = document.getElementById('recipeResults');
    recipeResultsDiv.innerHTML = '';

    if (data && data.results && data.results.length > 0) {
        data.results.forEach(recipe => {
            const recipeCard = createRecipeCard(recipe);
            recipeResultsDiv.appendChild(recipeCard);
        });
    } else {
        recipeResultsDiv.innerHTML = '<p>No recipes found. Please adjust your filters.</p>';
    }
}

function createRecipeCard(recipe) {
    const recipeCard = document.createElement('div');
    recipeCard.classList.add('recipeCard');
    recipeCard.innerHTML = `
        <h3>${recipe.title}</h3>
        <p>${recipe.readyInMinutes} minutes</p>
        <h4>Ingredients:</h4>
        ${recipe.extendedIngredients && recipe.extendedIngredients.length > 0 ?
            `<ul>${recipe.extendedIngredients.map(ingredient => `<li>${ingredient.original}</li>`).join('')}</ul>` :
            'No ingredients available.'
        }
        <h4>Instructions:</h4>
        ${recipe.analyzedInstructions && recipe.analyzedInstructions.length > 0 && recipe.analyzedInstructions[0].steps ?
            `<ol>${recipe.analyzedInstructions[0].steps.map(step => `<li>${step.step}</li>`).join('')}</ol>` :
            'No instructions available.'
        }
    `;
    return recipeCard;
}
