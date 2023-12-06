const recipes = [
  // Breakfast recipes
  { 
    name: "Tofu Scramble", 
    meal: "breakfast", 
    allergies: ["vegan"], 
    time: "0-15",
    ingredients: [
      "1 white onion, finely chopped",
      "2 ½ cups button mushrooms, finely minced",
      "1 teaspoon garlic powder",
      "½ teaspoon salt",
      "½ teaspoon black pepper",
      "1 ½ cups silken tofu",
      "½ teaspoon black salt",
      "1 teaspoon turmeric",
      "1 teaspoon smoked paprika",
      "2 tablespoons nutritional yeast",
    ],
    instructions: [
      "Place a non-stick or cast iron skillet over medium heat. Add the onion and a splash of water or oil and sautée for 2-3 minutes until fragrant and translucent.",
      "Add the chopped mushrooms, garlic powder, salt, and pepper to the pan. Stir to combine and cook over medium heat for 4-5 minutes, stirring occasionally.",
      "Once the liquid has evaporated and the mushrooms turn golden, add the silken tofu in small-ish chunks to the pan. Break it down gently with a wooden spoon or spatula and mix it with the rest of the ingredients.",
      "Add all of the spices: black salt, turmeric, smoked paprika, and nutritional yeast. Stir until well combined, then increase the heat to high.",
      "Cook until the silken tofu does not release any more water and a light golden brown “skin” forms.",
      "Remove from the heat and serve on freshly toasted bread, topped with fresh herbs.",
    ],
  },

  // Lunch recipes
  { 
    name: "One-Pot Garlicky Shrimp & Broccoli", 
    meal: "lunch", 
    allergies: ["gluten"], 
    time: "15-30",
    ingredients: [
      "3 tablespoons extra-virgin olive oil, divided",
      "6 medium cloves garlic, sliced, divided",
      "4 cups small broccoli florets",
      "½ cup diced red bell pepper",
      "½ teaspoon salt, divided",
      "½ teaspoon ground pepper, divided",
      "1 pound peeled and deveined raw shrimp (21-30 count)",
      "2 teaspoons lemon juice, plus more to taste"
    ],
    instructions: [
      "Heat 2 tablespoons oil in a large pot over medium heat. Add half the garlic and cook until beginning to brown, about 1 minute.",
      "Add broccoli, bell pepper and 1/4 teaspoon each salt and pepper. Cover and cook, stirring once or twice and adding 1 tablespoon water if the pot is too dry, until the vegetables are tender, 3 to 5 minutes.",
      "Transfer to a bowl and keep warm.",
      "Increase heat to medium-high and add the remaining 1 tablespoon oil to the pot. Add the remaining garlic and cook until beginning to brown, about 1 minute.",
      "Add shrimp and the remaining 1/4 teaspoon each salt and pepper; cook, stirring, until the shrimp are just cooked through, 3 to 5 minutes.",
      "Return the broccoli mixture to the pot along with lemon juice and stir to combine.",
    ],
  },

  { 
    name: "Creamy Baked Gnocchi with Squash & Spinach", 
    meal: "lunch", 
    allergies: ["none"], 
    time: "15-30", 
    ingredients: [
      "600g butternut squash, peeled, deseeded and cut into small chunks (450g prepared weight)",
      "1 tbsp olive oil, plus a drizzle (for optional air-frying)",
      "2 garlic cloves, crushed",
      "160g baby leaf spinach",
      "250g mascarpone",
      "grating of nutmeg",
      "30g parmesan or vegetarian alternative, grated",
      "500g gnocchi",
      "3 tbsp fresh or dried breadcrumbs",
    ],
    instructions: [
      "Put the squash in a heatproof bowl with a splash of water and pinch of seasoning, then cover and microwave on high for 5 mins. Or, toss the squash in a drizzle of oil and some seasoning, and cook for 12 mins at 200C in an air fryer until soft and caramelised. It can also be roasted in the oven for 25 mins.",
      "Meanwhile, heat 2 tsp of the oil in a large ovenproof frying pan over a medium heat and fry the garlic for 30 seconds until sizzling but not coloured. Add the spinach, season and cook until wilted.",
      "When the squash is tender, roughly mash half of it using a fork. Stir the mashed squash and the mascarpone into the spinach, then add 150ml water and stir until you have a smooth, creamy sauce. Grate in a generous amount of nutmeg and add half the parmesan. Gently stir in the gnocchi and squash chunks to coat in the sauce.",
      "Simmer for 1-2 mins until everything is heated through, adding a splash of water if the sauce is very thick. Scatter over the breadcrumbs and remaining parmesan.",
      "Heat the grill to medium-high, then slide the gnocchi under for a few minutes until golden and bubbling at the edges.",
    ],
  },

  // Dinner recipes
  { 
    name: "Vegan Ramen", 
    meal: "dinner", 
    allergies: ["vegan"], 
    time: "15-30",
    ingredients: [
      "1 tbsp oil",
      "1 garlic clove minced",
      "1 shallot minced",
      "1 inch ginger finely minced",
      "4-5 cremini mushrooms (or your favorite mushrooms) sliced",
      "3 shiitakes fresh or rehydrated, sliced",
      "4 cups water",
      "1/2 cube vegetable broth",
      "2 tbsp white miso I used sweet white miso",
      "1 tbsp soy sauce",
      "2 tbsp sugar",
      "2 tsp Gochujang or Toban Dijan paste",
      "1/4 tsp salt adjust to taste",
    ],
    instructions: [
      "Heat the oil in a large saucepan over medium heat. Once hot, add the garlic, shallot, ginger, and sauté for 2-3 minutes.",
      "Next, add the sliced Cremini mushrooms and shiitakes. Sauté for 2 more minutes.", 
      "Add the water, vegetable broth cube, white miso, soy sauce, sugar, and Gochujang. At this point, you can also add the fried tofu cubes if using.",
      "Bring to a boil. Then reduce the heat to a simmer and let simmer for 10-12 minutes. In the meantime, sauté the greens and cook the noodles according to the package instructions.",
      "Taste the broth and adjust saltiness if needed. The broth should be slightly sweet and salty, so do not hesitate to add more salt. Depending on the type of miso and vegetable broth cube used, you might have to add an extra 1/4 tsp of salt. On the other hand, if you find the broth too salty, you can dilute it with more water.",
      "To serve: Divide the drained noodles between two serving bowls and top with sautéed greens. Pour in the piping hot broth over the noodles with some mushrooms. Garnish with chopped green onions and a small sheet of roasted seaweed (nori). Serve hot.",
      "The broth will keep for up to 3 days in the refrigerator.",
    ],
  },

  { 
    name: "Garlic Butter Salmon", 
    meal: "dinner", 
    allergies: ["none"], 
    time: "15-30",
    ingredients: [
      "4 salmon fillets (180g/6oz each), skinless and boneless",
      "1/2 tsp salt , cooking / kosher",
      "1/4 tsp black pepper",
      "1 1/2 tbsp olive oil",
      "1 tbsp garlic (~2 cloves) , finely minced by hand (don't use a garlic press)",
      "6 tbsp salted butter , cut into cubes (or unsalted + 1/4 tsp salt)",
      "1 tsp lemon juice , plus more to taste",
      "2 tsp parsley , finely chopped",
    ],
    instructions: [
      "Season salmon: Take salmon out of fridge 30 minutes prior to cooking. Sprinkle both sides with salt and pepper.",
      "Sear salmon 3 mins: Heat oil in large non stick skillet over medium-high heat. Add salmon, presentation side (ie. curved side) down, and cook for 3 minutes until golden.",
      "Turn, cook 1 min, then add butter: Turn salmon and cook the other side for 1 minute. THEN put the butter in",
      "Baste 1 1/2 minutes: Once butter is melted and foaming, add garlic and immediately start spooning the bubbling butter continuously over the salmon for 1 1/2 minutes. To do this, tilt the pan slightly so the butter pools on one side. Use a large spoon to scoop the butter up and spoon it over the salmon.",
      "Remove salmon from stove: Check Internal temperature of salmon. It should be 50°C/122°F for medium-rare (optimum juiciness pull temp). Remove salmon to a plate. Rest for 3 minutes – it will rise to 53°C/127°F. (See Note 2 for internal temperatures)",
      "Add lemon juice to butter: Put pan back on unlit stove to keep butter hot. Add lemon juice.",
    ],
  },

  { 
    name: "Asparagus ‘n’ Shrimp with Angel Hair", 
    meal: "dinner", 
    allergies: ["none"], 
    time: "15-30",
    ingredients: [
      "3 ounces uncooked angel hair pasta",
      "1/2 pound uncooked shrimp (16-20 per pound), peeled and deveined",
      "1/4 teaspoon salt",
      "1/8 teaspoon crushed red pepper flakes",
      "2 tablespoons olive oil, divided",
      "8 fresh asparagus spears, trimmed and cut into 2-inch pieces",
      "1/2 cup sliced fresh mushrooms",
      "1/4 cup chopped seeded tomato, peeled",
      "4 garlic cloves, minced", 
      "2 teaspoons chopped green onion",
      "1/2 cup white wine or chicken broth",
      "1-1/2 teaspoons minced fresh basil",
      "1-1/2 teaspoons minced fresh oregano",
      "1-1/2 teaspoons minced fresh parsley",
      "1-1/2 teaspoons minced fresh thyme",
      "1/4 cup grated Parmesan cheese",
      "Lemon wedges",
    ],
  },
];

function generateRecipe() {
  const selectedMeal = document.getElementById("meal").value;
  const selectedAllergies = Array.from(document.getElementById("allergies").selectedOptions, option => option.value);
  const selectedTime = document.getElementById("timeSelect").value;

  console.log("Selected Meal:", selectedMeal);
  console.log("Selected Allergies:", selectedAllergies);
  console.log("Selected Time:", selectedTime);

  const filteredRecipes = recipes.filter(recipe =>
      recipe.meal.toLowerCase() === selectedMeal.toLowerCase() &&
      (selectedAllergies.length === 0 || selectedAllergies.every(allergy => recipe.allergies.includes(allergy))) &&
      recipe.time === selectedTime
  );

  const resultDiv = document.getElementById("recipeResult");
  resultDiv.innerHTML = ""; // Clear previous content

  if (filteredRecipes.length > 0) {
    const randomIndex = Math.floor(Math.random() * filteredRecipes.length);
    const recipe = filteredRecipes[randomIndex];

    const detailsDiv = document.createElement("div");
    detailsDiv.innerHTML = `
            <h2>${recipe.name}</h2>
            <p>Meal: ${recipe.meal}</p>
            <p>Allergies: ${recipe.allergies.join(", ")}</p>
            <p>Time: ${recipe.time} minutes</p>
            <h3>Ingredients:</h3>
            ${recipe.ingredients ? `<ul>${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join("")}</ul>` : "<p>No ingredients listed.</p>"}
            <h3>Instructions:</h3>
            ${recipe.instructions ? `<ol>${recipe.instructions.map(instruction => `<li>${instruction}</li>`).join("")}</ol>` : "<p>No instructions listed.</p>"}
        `;

    resultDiv.appendChild(detailsDiv);
  } else {
    // If no matching recipes found, you can optionally display a message or leave it empty
    // resultDiv.textContent = "No matching recipes found.";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const generateButton = document.getElementById("next");

  if (generateButton) {
    generateButton.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent the default form submission behavior
      generateRecipe();
    });
  } else {
    console.error("Button element not found");
  }

  // Call it initially if you want to generate a recipe on button click, not on page load
  // generateRecipe();
});